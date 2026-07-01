#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASE_DIR="${SCRIPT_DIR}"
TLS_DIR="${BASE_DIR}/.tls"
ACCESS_CHECK_URL="/toby/2026/c.draft/challenge/access-check.txt"
SUBMIT_URL="/toby/2026/c.draft/challenge/submit.cgi"
SUBMITTED_CACHE="${BASE_DIR}/.submitted-full-score"

if [ -n "${NO_COLOR:-}" ]; then
    USE_COLOR=0
elif [ -t 1 ] || [ -n "${FORCE_COLOR:-}" ]; then
    USE_COLOR=1
else
    USE_COLOR=0
fi

if [ "${USE_COLOR}" = "1" ]; then
    COLOR_RESET=$'\033[0m'
    COLOR_DIM=$'\033[2m'
    COLOR_RED=$'\033[31m'
    COLOR_GREEN=$'\033[32m'
    COLOR_YELLOW=$'\033[33m'
    COLOR_BLUE=$'\033[34m'
    COLOR_MAGENTA=$'\033[35m'
    COLOR_CYAN=$'\033[36m'
    COLOR_GRAY=$'\033[90m'
    COLOR_ORANGE=$'\033[38;5;208m'
    COLOR_PINK=$'\033[38;5;205m'
    COLOR_VIOLET=$'\033[38;5;141m'
    COLOR_BOLD=$'\033[1m'
else
    COLOR_RESET=""
    COLOR_DIM=""
    COLOR_RED=""
    COLOR_GREEN=""
    COLOR_YELLOW=""
    COLOR_BLUE=""
    COLOR_MAGENTA=""
    COLOR_CYAN=""
    COLOR_GRAY=""
    COLOR_ORANGE=""
    COLOR_PINK=""
    COLOR_VIOLET=""
    COLOR_BOLD=""
fi

SPINNER_PID=""
TEMP_DIR=""
CLEAN_TEMP=0
LOCK_DIR=""
PROGRESS_WIDTH=34
MAX_JOBS="${JOBS:-}"
SUBMIT_JOBS="${SUBMIT_JOBS:-}"
SUBMIT_RETRIES="${SUBMIT_RETRIES:-3}"
CASE_JOBS="${CASE_JOBS:-8}"
POLL_INTERVAL="0.02"

usage() {
    cat <<'EOF'
USAGE:
  ./submit.sh
  ./submit.sh <PROBLEM_ID> <CODE_FILE_PATH>
  ./submit.sh [--jobs N] [--case-jobs N] [--submit-jobs N] [--submit-retries N] --all
  ./submit.sh [--jobs N] [--case-jobs N] --check-all

EXAMPLES:
  ./submit.sh
  ./submit.sh 4.1.A1 04.values-and-expressions/4.1.A1.js
  ./submit.sh 7.4.R1 07.iteration/7.4.R1.trace.txt
  ./submit.sh 8.4.E1 08.iteration-2/8.4.E1.js
  ./submit.sh --all
  ./submit.sh --jobs 8 --check-all
  ./submit.sh --jobs 8 --case-jobs 8 --all
  JOBS=8 CASE_JOBS=8 ./submit.sh --all

This script runs TLS local grading first.
It submits only when the score is 100.
It auto-detects local .js and .trace.txt answer files through chapter 08.
Problems recorded in .submitted-full-score are skipped during submission.
EOF
}

cleanup() {
    stop_spinner
    show_cursor
    if [ -n "${LOCK_DIR}" ] && [ -d "${LOCK_DIR}" ]; then
        rm -f "${LOCK_DIR}/pid"
        rmdir "${LOCK_DIR}" >/dev/null 2>&1 || true
    fi
    if [ "${CLEAN_TEMP}" = "1" ] && [ -n "${TEMP_DIR}" ] && [ -d "${TEMP_DIR}" ]; then
        rm -rf "${TEMP_DIR}"
    fi
}
trap cleanup EXIT INT TERM

say() {
    printf '%s\n' "$*"
}

banner() {
    local mode="$1"

    say "${COLOR_CYAN}+------------------------------------------------------------+${COLOR_RESET}"
    say "${COLOR_CYAN}|${COLOR_RESET} ${COLOR_BOLD}${COLOR_PINK}TLS${COLOR_RESET}${COLOR_BOLD} Auto Submit${COLOR_RESET} ${COLOR_DIM}${mode}${COLOR_RESET}"
    say "${COLOR_CYAN}|${COLOR_RESET} ${COLOR_GRAY}local judge -> full score gate -> submit queue${COLOR_RESET}"
    say "${COLOR_CYAN}+------------------------------------------------------------+${COLOR_RESET}"
}

info() {
    say "${COLOR_BLUE}[info]${COLOR_RESET} $*"
}

success() {
    say "${COLOR_GREEN}[ ok ]${COLOR_RESET} $*"
}

warn() {
    say "${COLOR_YELLOW}[skip]${COLOR_RESET} $*"
}

error() {
    say "${COLOR_RED}[err ]${COLOR_RESET} $*" >&2
}

start_spinner() {
    local message="$1"

    if ! [ -t 1 ]; then
        say "${message}..."
        return
    fi

    (
        local frames=("[>    ]" "[=>   ]" "[==>  ]" "[===> ]" "[ ===>]" "[  ===]" "[   ==]" "[    =]")
        local index=0
        while true; do
            printf '\r\033[2K  %s%s%s %s' "${COLOR_MAGENTA}" "${frames[index++%8]}" "${COLOR_RESET}" "${message}"
            sleep 0.12
        done
    ) &
    SPINNER_PID=$!
}

stop_spinner() {
    if [ -n "${SPINNER_PID}" ]; then
        kill "${SPINNER_PID}" >/dev/null 2>&1 || true
        wait "${SPINNER_PID}" 2>/dev/null || true
        SPINNER_PID=""
        if [ -t 1 ]; then
            printf '\r%*s\r' 80 ''
        fi
    fi
}

hide_cursor() {
    if [ -t 1 ]; then
        printf '\033[?25l'
    fi
}

show_cursor() {
    if [ -t 1 ]; then
        printf '\033[?25h'
    fi
}

status_color() {
    case "$1" in
        ok) printf '%s' "${COLOR_GREEN}" ;;
        skip) printf '%s' "${COLOR_YELLOW}" ;;
        warn) printf '%s' "${COLOR_YELLOW}" ;;
        error) printf '%s' "${COLOR_RED}" ;;
        *) printf '%s' "${COLOR_CYAN}" ;;
    esac
}

status_badge() {
    case "$1" in
        ok) printf '%s[100]%s' "${COLOR_GREEN}" "${COLOR_RESET}" ;;
        submit) printf '%s[send]%s' "${COLOR_GREEN}" "${COLOR_RESET}" ;;
        skip) printf '%s[skip]%s' "${COLOR_YELLOW}" "${COLOR_RESET}" ;;
        warn) printf '%s[work]%s' "${COLOR_YELLOW}" "${COLOR_RESET}" ;;
        error) printf '%s[fail]%s' "${COLOR_RED}" "${COLOR_RESET}" ;;
        *) printf '%s[run ]%s' "${COLOR_CYAN}" "${COLOR_RESET}" ;;
    esac
}

progress_bar() {
    local current="$1"
    local total="$2"
    local state="$3"
    local label="$4"
    local filled=0
    local empty=0
    local percent=0
    local color
    local fill
    local rest

    if [ "${total}" -gt 0 ]; then
        filled=$((current * PROGRESS_WIDTH / total))
        percent=$((current * 100 / total))
    fi
    empty=$((PROGRESS_WIDTH - filled))
    color="$(status_color "${state}")"
    fill="$(printf '%*s' "${filled}" '' | tr ' ' '=')"
    rest="$(printf '%*s' "${empty}" '' | tr ' ' '.')"

    printf '  %s%-6s%s %s[%s%s%s%s]%s %3d%% %3d/%-3d %s\n' \
        "${COLOR_DIM}" \
        "$(status_badge "${state}")" \
        "${COLOR_RESET}" \
        "${COLOR_DIM}" \
        "${color}" \
        "${fill}" \
        "${COLOR_DIM}" \
        "${rest}" \
        "${COLOR_RESET}" \
        "${percent}" \
        "${current}" \
        "${total}" \
        "${label}"
}

live_meter() {
    local current="$1"
    local total="$2"
    local state="$3"
    local label="$4"
    local active="$5"
    local ok_count="$6"
    local failed_count="$7"
    local frame="$8"
    local filled=0
    local empty=0
    local percent=0
    local comet_pos
    local i
    local ch
    local bar=""
    local color
    local pulse

    if ! [ -t 1 ]; then
        return
    fi

    if [ "${total}" -gt 0 ]; then
        filled=$((current * PROGRESS_WIDTH / total))
        percent=$((current * 100 / total))
    fi
    empty=$((PROGRESS_WIDTH - filled))
    comet_pos=$(((frame / 2) % PROGRESS_WIDTH))
    color="$(status_color "${state}")"

    for ((i = 0; i < PROGRESS_WIDTH; i++)); do
        if [ "${i}" -lt "${filled}" ]; then
            ch="="
        elif [ "${i}" -eq "${comet_pos}" ] || [ "${i}" -eq $(((comet_pos + 1) % PROGRESS_WIDTH)) ]; then
            ch=">"
        else
            ch="."
        fi
        if [ "${i}" -lt "${filled}" ]; then
            bar+="${color}${ch}"
        elif [ "${ch}" = ">" ]; then
            bar+="${COLOR_ORANGE}${ch}"
        else
            bar+="${COLOR_GRAY}${ch}"
        fi
    done

    case $((frame % 6)) in
        0) pulse="calibrating" ;;
        1) pulse="checking" ;;
        2) pulse="judging" ;;
        3) pulse="scoring" ;;
        4) pulse="syncing" ;;
        *) pulse="polishing" ;;
    esac

    printf '\r\033[2K  %s %s[%s%s] %3d%% %3d/%-3d  %sactive:%2d%s  %sok:%2d%s  %swork:%2d%s  %s%s%s  %s' \
        "$(status_badge "${state}")" \
        "${COLOR_DIM}" \
        "${bar}" \
        "${COLOR_DIM}" \
        "${percent}" \
        "${current}" \
        "${total}" \
        "${COLOR_CYAN}" \
        "${active}" \
        "${COLOR_RESET}" \
        "${COLOR_GREEN}" \
        "${ok_count}" \
        "${COLOR_RESET}" \
        "${COLOR_YELLOW}" \
        "${failed_count}" \
        "${COLOR_RESET}" \
        "${COLOR_VIOLET}" \
        "${pulse}" \
        "${COLOR_RESET}" \
        "${label}"
}

finish_live_meter() {
    if [ -t 1 ]; then
        printf '\n'
    fi
}

report_progress() {
    local current="$1"
    local total="$2"
    local state="$3"
    local label="$4"
    local active="$5"
    local ok_count="$6"
    local failed_count="$7"
    local frame="$8"

    if [ -t 1 ]; then
        live_meter "${current}" "${total}" "${state}" "${label}" "${active}" "${ok_count}" "${failed_count}" "${frame}"
    else
        progress_bar "${current}" "${total}" "${state}" "${label}"
    fi
}

ensure_tls() {
    if ! [ -x "${TLS_DIR}/check.sh" ]; then
        error "${TLS_DIR}/check.sh does not exist or is not executable."
        exit 1
    fi
}

acquire_tls_lock() {
    local current_pid="${BASHPID:-$$}"

    LOCK_DIR="${TLS_DIR}/.grade.lock"
    if mkdir "${LOCK_DIR}" 2>/dev/null; then
        printf '%s\n' "${current_pid}" > "${LOCK_DIR}/pid"
        return
    fi

    local owner="unknown"
    if [ -f "${LOCK_DIR}/pid" ]; then
        owner="$(cat "${LOCK_DIR}/pid" 2>/dev/null || printf 'unknown')"
    fi
    if [[ "${owner}" =~ ^[0-9]+$ ]] && ! kill -0 "${owner}" 2>/dev/null; then
        rm -f "${LOCK_DIR}/pid"
        rmdir "${LOCK_DIR}" >/dev/null 2>&1 || true
        if mkdir "${LOCK_DIR}" 2>/dev/null; then
            printf '%s\n' "${current_pid}" > "${LOCK_DIR}/pid"
            return
        fi
    fi
    error "Another grademe.sh or submit.sh process is using ${TLS_DIR} (pid: ${owner})."
    error "Run one grading/submission command at a time, then try again."
    exit 1
}

detect_jobs() {
    local detected

    detected=8
    printf '%s' "${detected}"
}

validate_jobs() {
    if [ -z "${MAX_JOBS}" ]; then
        MAX_JOBS="$(detect_jobs)"
    fi
    if ! [[ "${MAX_JOBS}" =~ ^[0-9]+$ ]] || [ "${MAX_JOBS}" -lt 1 ]; then
        error "--jobs must be a positive integer."
        exit 2
    fi
    if [ -z "${SUBMIT_JOBS}" ]; then
        SUBMIT_JOBS=1
    fi
    if ! [[ "${SUBMIT_JOBS}" =~ ^[0-9]+$ ]] || [ "${SUBMIT_JOBS}" -lt 1 ]; then
        error "--submit-jobs must be a positive integer."
        exit 2
    fi
    if ! [[ "${SUBMIT_RETRIES}" =~ ^[0-9]+$ ]] || [ "${SUBMIT_RETRIES}" -lt 1 ]; then
        error "--submit-retries must be a positive integer."
        exit 2
    fi
    if ! [[ "${CASE_JOBS}" =~ ^[0-9]+$ ]] || [ "${CASE_JOBS}" -lt 1 ]; then
        error "--case-jobs must be a positive integer."
        exit 2
    fi
}

ensure_login() {
    if [ -f "${TLS_DIR}/data/auth" ]; then
        if timeout 5s node "${TLS_DIR}/scripts/access-check.js" "${ACCESS_CHECK_URL}" >/dev/null 2>&1; then
            return
        fi
    fi

    info "Account login is required before submission."
    "${TLS_DIR}/scripts/set-account.sh" "${ACCESS_CHECK_URL}"
}

init_problem_if_needed() {
    local problem_id="$1"
    local init_script="${TLS_DIR}/scripts/problems/${problem_id}-init.sh"
    local work_dir="${TLS_DIR}/problems/${problem_id}"

    if ! [ -f "${init_script}" ]; then
        error "No problem with ID '${problem_id}'."
        return 1
    fi

    if ! [ -d "${work_dir}" ] || [ "${init_script}" -nt "${work_dir}" ]; then
        "${init_script}" >/dev/null
    fi
}

grade_locally() {
    local problem_id="$1"
    local code_path="$2"
    local check_script="${TLS_DIR}/scripts/problems/${problem_id}-check.sh"
    local default_script="${TLS_DIR}/scripts/problems/check.default.sh"

    if [ -f "${check_script}" ]; then
        "${check_script}" "${code_path}"
    else
        "${default_script}" "${problem_id}" "${code_path}"
    fi
}

case_count_for() {
    local problem_id="$1"
    local judge_dir="${TLS_DIR}/problems/${problem_id}/judge"

    if [ -d "${judge_dir}" ]; then
        find "${judge_dir}" -mindepth 1 -maxdepth 1 -type d | wc -l
    else
        printf '0\n'
    fi
}

fast_default_case_worker() {
    local work_dir="$1"
    local case_dir="$2"
    local ext="$3"
    local exec_time="$4"
    local code_file="${work_dir}/code.txt"
    local case_result="R"

    rm -f "${case_dir}/a.out" "${case_dir}/compile-error.txt" "${case_dir}/output.txt" "${case_dir}/error.txt" "${case_dir}/result.txt"

    if ! (cd "${case_dir}" && node "transform.js" "${code_file}" > "transformed.${ext}" 2> "compile-error.txt"); then
        printf 'C\n' > "${case_dir}/result.txt"
        return
    fi

    set +e
    (cd "${case_dir}" && timeout "${exec_time}" node "transformed.${ext}" < "input.txt" > "output.txt" 2> "error.txt")
    if [ "$?" -eq 0 ]; then
        (cd "${case_dir}" && node "verify.js" > "result.txt")
    else
        printf 'R\n' > "${case_dir}/result.txt"
    fi
    set -e

    case_result="$(tr -d '[:space:]' < "${case_dir}/result.txt" 2>/dev/null || printf 'R')"
    case "${case_result}" in
        1|0|C|R) ;;
        *) printf 'R\n' > "${case_dir}/result.txt" ;;
    esac
}

fast_grade_default() {
    local problem_id="$1"
    local code_path="$2"
    local ext="js"
    local exec_time="5s"
    local work_dir="${TLS_DIR}/problems/${problem_id}"
    local judge_dir="${work_dir}/judge"
    local case_dirs=()
    local pids=()
    local next=0
    local total=0
    local pid
    local result
    local accepted=0
    local test_result=""
    local case_dir

    cp "${code_path}" "${work_dir}/code.txt"
    rm -f "${work_dir}/test_result.txt" "${work_dir}/score.txt"

    while IFS= read -r case_dir; do
        case_dirs+=("${case_dir}")
    done < <(find "${judge_dir}" -mindepth 1 -maxdepth 1 -type d | sort -V)

    total="${#case_dirs[@]}"
    while [ "${next}" -lt "${total}" ]; do
        pids=()
        while [ "${#pids[@]}" -lt "${CASE_JOBS}" ] && [ "${next}" -lt "${total}" ]; do
            fast_default_case_worker "${work_dir}" "${case_dirs[${next}]}" "${ext}" "${exec_time}" &
            pids+=("$!")
            next=$((next + 1))
        done

        for pid in "${pids[@]}"; do
            wait "${pid}" 2>/dev/null || true
        done
    done

    for case_dir in "${case_dirs[@]}"; do
        result="$(tr -d '[:space:]' < "${case_dir}/result.txt")"
        test_result="${test_result}${result}"
        if [ "${result}" = "1" ]; then
            accepted=$((accepted + 1))
        fi
    done

    printf '%s\n' "${test_result}" > "${work_dir}/test_result.txt"
    printf '%s\n' "$((100 * accepted / total))" > "${work_dir}/score.txt"
    printf 'fast default check: %s/%s cases accepted\n' "${accepted}" "${total}"
}

grade_locally_quiet() {
    local problem_id="$1"
    local code_path="$2"
    local check_script="${TLS_DIR}/scripts/problems/${problem_id}-check.sh"
    local case_count

    if [ -f "${check_script}" ]; then
        grade_locally "${problem_id}" "${code_path}"
        return
    fi

    case_count="$(case_count_for "${problem_id}")"
    if [ "${case_count}" -gt 10 ]; then
        fast_grade_default "${problem_id}" "${code_path}"
    else
        grade_locally "${problem_id}" "${code_path}"
    fi
}

score_for() {
    local problem_id="$1"
    local score_file="${TLS_DIR}/problems/${problem_id}/score.txt"

    if [ -f "${score_file}" ]; then
        tr -d '[:space:]' < "${score_file}"
    else
        printf '?'
    fi
}

case_label() {
    case "$1" in
        1) printf 'AC' ;;
        0) printf 'WA' ;;
        C) printf 'CE' ;;
        R) printf 'RE' ;;
        *) printf '%s' "$1" ;;
    esac
}

failed_cases_for() {
    local problem_id="$1"
    local judge_dir="${TLS_DIR}/problems/${problem_id}/judge"
    local case_dir
    local case_id
    local result
    local labels=()

    if ! [ -d "${judge_dir}" ]; then
        printf '-'
        return
    fi

    while IFS= read -r case_dir; do
        case_id="$(basename "${case_dir}")"
        if ! [ -f "${case_dir}/result.txt" ]; then
            labels+=("#${case_id}:?")
            continue
        fi
        result="$(tr -d '[:space:]' < "${case_dir}/result.txt")"
        if [ "${result}" != "1" ]; then
            labels+=("#${case_id}:$(case_label "${result}")")
        fi
    done < <(find "${judge_dir}" -mindepth 1 -maxdepth 1 -type d | sort -V)

    if [ "${#labels[@]}" -eq 0 ]; then
        printf '-'
    else
        printf '%s' "${labels[*]}"
    fi
}

show_failure_detail() {
    local problem_id="$1"
    local code_path="$2"
    local score="$3"

    printf '  %s%s%s  score=%s  file=%s\n' "${COLOR_BOLD}" "${problem_id}" "${COLOR_RESET}" "${score}" "${code_path}"
    printf '    failed: %s\n' "$(failed_cases_for "${problem_id}")"
}

summary_box() {
    local total="$1"
    local ok_count="$2"
    local submitted_count="$3"
    local failed_count="$4"
    local do_submit="$5"
    local submit_failed_count="$6"
    local skipped_count="${7:-0}"

    say "${COLOR_CYAN}+---------------- Summary ------------------------+${COLOR_RESET}"
    printf '%s|%s full score    %s%3d/%-3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_GREEN}" "${ok_count}" "${total}" "${COLOR_RESET}"
    if [ "${do_submit}" = "1" ]; then
        printf '%s|%s submitted     %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_GREEN}" "${submitted_count}" "${COLOR_RESET}"
        printf '%s|%s skipped       %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_YELLOW}" "${skipped_count}" "${COLOR_RESET}"
        if [ "${submit_failed_count}" -eq 0 ]; then
            printf '%s|%s send failed   %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_GREEN}" "${submit_failed_count}" "${COLOR_RESET}"
        else
            printf '%s|%s send failed   %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_RED}" "${submit_failed_count}" "${COLOR_RESET}"
        fi
    fi
    if [ "${failed_count}" -eq 0 ]; then
        printf '%s|%s needs work    %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_GREEN}" "${failed_count}" "${COLOR_RESET}"
    else
        printf '%s|%s needs work    %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_YELLOW}" "${failed_count}" "${COLOR_RESET}"
    fi
    say "${COLOR_CYAN}+-------------------------------------------------+${COLOR_RESET}"
}

submitted_full_score_recorded() {
    local problem_id="$1"

    if ! [ -f "${SUBMITTED_CACHE}" ]; then
        return 1
    fi

    awk -F '\t' -v id="${problem_id}" '$1 == id { found = 1 } END { exit found ? 0 : 1 }' "${SUBMITTED_CACHE}"
}

mark_submitted_full_score() {
    local problem_id="$1"
    local code_path="$2"
    local timestamp

    if submitted_full_score_recorded "${problem_id}"; then
        return 0
    fi

    timestamp="$(date '+%Y-%m-%dT%H:%M:%S%z')"
    printf '%s\t%s\t%s\n' "${problem_id}" "${timestamp}" "${code_path}" >> "${SUBMITTED_CACHE}"
}

submit_problem() {
    local problem_id="$1"

    timeout 15s node "${TLS_DIR}/scripts/submit.js" "${problem_id}" "${SUBMIT_URL}"
}

grade_worker() {
    local problem_id="$1"
    local code_path="$2"
    local display_path="$3"
    local temp_dir="$4"
    local index="$5"
    local status=0
    local score
    local result_tmp="${temp_dir}/result.${index}.tmp"
    local result_file="${temp_dir}/result.${index}"

    TEMP_DIR="${temp_dir}"
    CLEAN_TEMP=0

    if ! run_one "${problem_id}" "${code_path}" 0 1 >/dev/null 2>&1; then
        status=1
    fi

    score="$(score_for "${problem_id}")"
    printf '%s\t%s\t%s\t%s\n' "${problem_id}" "${display_path}" "${score}" "${status}" > "${result_tmp}"
    mv "${result_tmp}" "${result_file}"
}

submit_worker() {
    local problem_id="$1"
    local code_path="$2"
    local temp_dir="$3"
    local index="$4"
    local submit_log="${temp_dir}/${problem_id}.submit.log"
    local result_tmp="${temp_dir}/submit-result.${index}.tmp"
    local result_file="${temp_dir}/submit-result.${index}"
    local attempt=1
    local status="0"

    : > "${submit_log}"
    if submitted_full_score_recorded "${problem_id}"; then
        printf 'skip: %s is already recorded in %s\n' "${problem_id}" "${SUBMITTED_CACHE}" > "${submit_log}"
        printf '%s\t%s\t%s\t%s\n' "${problem_id}" "${code_path}" "${submit_log}" "skip" > "${result_tmp}"
        mv "${result_tmp}" "${result_file}"
        return
    fi

    while [ "${attempt}" -le "${SUBMIT_RETRIES}" ]; do
        {
            printf 'attempt %d/%d\n' "${attempt}" "${SUBMIT_RETRIES}"
            submit_problem "${problem_id}"
        } >>"${submit_log}" 2>&1 && {
            mark_submitted_full_score "${problem_id}" "${code_path}"
            status="0"
            break
        }

        status="1"
        if [ "${attempt}" -lt "${SUBMIT_RETRIES}" ]; then
            sleep "$(awk "BEGIN { printf \"%.2f\", ${attempt} * 0.35 }")"
        fi
        attempt=$((attempt + 1))
    done

    printf '%s\t%s\t%s\t%s\n' "${problem_id}" "${code_path}" "${submit_log}" "${status}" > "${result_tmp}"
    mv "${result_tmp}" "${result_file}"
}

run_one() {
    local problem_id="$1"
    local code_path="$2"
    local do_submit="$3"
    local quiet="$4"
    local score
    local grade_log
    local submit_log

    if ! [ -f "${code_path}" ]; then
        error "Code file does not exist: ${code_path}"
        return 2
    fi

    init_problem_if_needed "${problem_id}"

    if [ "${quiet}" = "1" ]; then
        grade_log="${TEMP_DIR}/${problem_id}.grade.log"
        if ! grade_locally_quiet "${problem_id}" "${code_path}" >"${grade_log}" 2>&1; then
            score="$(score_for "${problem_id}")"
            warn "${problem_id} local grading failed. See ${grade_log}"
            return 1
        fi
    else
        say "${COLOR_BOLD}${problem_id}${COLOR_RESET} ${COLOR_DIM}${code_path}${COLOR_RESET}"
        grade_locally "${problem_id}" "${code_path}"
    fi

    score="$(score_for "${problem_id}")"
    if [ "${score}" != "100" ]; then
        if [ "${quiet}" != "1" ]; then
            warn "Score is ${score}; not submitted."
            show_failure_detail "${problem_id}" "${code_path}" "${score}"
        fi
        return 1
    fi

    if [ "${do_submit}" != "1" ]; then
        return 0
    fi

    if submitted_full_score_recorded "${problem_id}"; then
        warn "${problem_id} already submitted with full score; skipped."
        return 0
    fi

    if [ "${quiet}" = "1" ]; then
        submit_log="${TEMP_DIR}/${problem_id}.submit.log"
        if ! submit_problem "${problem_id}" >"${submit_log}" 2>&1; then
            warn "${problem_id} submission failed. See ${submit_log}"
            return 1
        fi
        mark_submitted_full_score "${problem_id}" "${code_path}"
    else
        info "Score is 100. Submitting..."
        submit_problem "${problem_id}"
        mark_submitted_full_score "${problem_id}" "${code_path}"
        success "Submitted ${problem_id}."
    fi
}

discover_problem_files() {
    local file
    local file_name
    local problem_id
    local init_script
    local -A seen=()

    while IFS= read -r file; do
        file_name="$(basename "${file}")"
        problem_id="${file_name%.trace.txt}"

        if [ -n "${seen[${problem_id}]:-}" ]; then
            continue
        fi
        init_script="${TLS_DIR}/scripts/problems/${problem_id}-init.sh"
        if [ -f "${init_script}" ]; then
            seen["${problem_id}"]=1
            printf '%s\t%s\n' "${problem_id}" "${file}"
        fi
    done < <(
        find "${BASE_DIR}" \
            -path "${BASE_DIR}/.git" -prune -o \
            -path "${TLS_DIR}" -prune -o \
            -path "${BASE_DIR}/.tls.0" -prune -o \
            -type f -name '*.trace.txt' -print |
            sed "s#^${BASE_DIR}/##" |
            sort -V
    )

    while IFS= read -r file; do
        file_name="$(basename "${file}")"
        problem_id="${file_name%.js}"

        if [ -n "${seen[${problem_id}]:-}" ]; then
            continue
        fi
        init_script="${TLS_DIR}/scripts/problems/${problem_id}-init.sh"
        if [ -f "${init_script}" ]; then
            seen["${problem_id}"]=1
            printf '%s\t%s\n' "${problem_id}" "${file}"
        fi
    done < <(
        find "${BASE_DIR}" \
            -path "${BASE_DIR}/.git" -prune -o \
            -path "${TLS_DIR}" -prune -o \
            -path "${BASE_DIR}/.tls.0" -prune -o \
            -type f -name '*.js' -print |
            sed "s#^${BASE_DIR}/##" |
            sort -V
    )
}

run_all() {
    local do_submit="$1"
    local entries=()
    local full_scores=()
    local entry
    local problem_id
    local code_path
    local total
    local completed=0
    local next=0
    local active=0
    local ok_count=0
    local submitted_count=0
    local submit_failed_count=0
    local skipped_count=0
    local failed_count=0
    local failures=()
    local submit_failures=()
    local score
    local status
    local pids=()
    local made_progress
    local index
    local pid
    local result_file
    local submit_log
    local frame=0
    local last_label="ready"
    local last_state="run"
    local submit_pids=()
    local submit_next=0
    local submit_active=0
    local retry_failures=()
    local retry_total=0
    local retry_index=0

    TEMP_DIR="$(mktemp -d)"
    CLEAN_TEMP=1

    while IFS= read -r entry; do
        entries+=("${entry}")
    done < <(discover_problem_files)

    total="${#entries[@]}"
    if [ "${total}" -eq 0 ]; then
        warn "No local problem files were found."
        return 1
    fi

    if [ "${do_submit}" = "1" ]; then
        banner "submit when score is 100"
    else
        banner "dry run"
    fi

    validate_jobs
    if [ "${do_submit}" = "1" ]; then
        info "Checking ${total} problems. Full-score answers will be submitted."
    else
        info "Checking ${total} problems. Dry run: nothing will be submitted."
    fi
    if [ "${do_submit}" = "1" ]; then
        info "Parallel grading with ${MAX_JOBS} problem job(s), ${CASE_JOBS} case job(s) for heavy problems; submitting with ${SUBMIT_JOBS} job(s), retrying up to ${SUBMIT_RETRIES} time(s)."
    else
        info "Parallel grading with ${MAX_JOBS} problem job(s), ${CASE_JOBS} case job(s) for heavy problems."
    fi
    hide_cursor
    report_progress 0 "${total}" run "ready" 0 0 0 "${frame}"

    while [ "${completed}" -lt "${total}" ]; do
        while [ "${active}" -lt "${MAX_JOBS}" ] && [ "${next}" -lt "${total}" ]; do
            entry="${entries[${next}]}"
            problem_id="${entry%%$'\t'*}"
            code_path="${entry#*$'\t'}"
            grade_worker "${problem_id}" "${BASE_DIR}/${code_path}" "${code_path}" "${TEMP_DIR}" "${next}" &
            pids["${next}"]=$!
            next=$((next + 1))
            active=$((active + 1))
        done

        made_progress=0
        for index in "${!pids[@]}"; do
            pid="${pids[${index}]}"
            if [ -z "${pid}" ]; then
                continue
            fi

            result_file="${TEMP_DIR}/result.${index}"
            if ! [ -f "${result_file}" ]; then
                continue
            fi

            wait "${pid}" 2>/dev/null || true
            pids["${index}"]=""
            active=$((active - 1))
            completed=$((completed + 1))
            made_progress=1

            IFS=$'\t' read -r problem_id code_path score status < "${result_file}"
            if [ "${status}" = "0" ] && [ "${score}" = "100" ]; then
                full_scores+=("${problem_id}"$'\t'"${code_path}")
                ok_count=$((ok_count + 1))
                last_state="ok"
                last_label="${problem_id} score=100"
            else
                failed_count=$((failed_count + 1))
                failures+=("${problem_id}"$'\t'"${code_path}"$'\t'"${score}")
                last_state="warn"
                last_label="${problem_id} score=${score}"
            fi
            frame=$((frame + 1))
            report_progress "${completed}" "${total}" "${last_state}" "${last_label}" "${active}" "${ok_count}" "${failed_count}" "${frame}"
        done

        if [ "${made_progress}" -eq 0 ]; then
            frame=$((frame + 1))
            if [ -t 1 ]; then
                report_progress "${completed}" "${total}" "${last_state}" "${last_label}" "${active}" "${ok_count}" "${failed_count}" "${frame}"
            fi
            sleep "${POLL_INTERVAL}"
        fi
    done
    finish_live_meter

    if [ "${#failures[@]}" -gt 0 ]; then
        say
        info "Rechecking ${#failures[@]} non-full-score answer(s) sequentially before submitting."
        retry_failures=("${failures[@]}")
        retry_total="${#retry_failures[@]}"
        failures=()
        failed_count=0

        for entry in "${retry_failures[@]}"; do
            retry_index=$((retry_index + 1))
            problem_id="${entry%%$'\t'*}"
            entry="${entry#*$'\t'}"
            code_path="${entry%%$'\t'*}"

            if run_one "${problem_id}" "${BASE_DIR}/${code_path}" 0 1 >/dev/null 2>&1; then
                score="$(score_for "${problem_id}")"
                if [ "${score}" = "100" ]; then
                    full_scores+=("${problem_id}"$'\t'"${code_path}")
                    ok_count=$((ok_count + 1))
                    progress_bar "${retry_index}" "${retry_total}" ok "${problem_id} score=100 after retry"
                    continue
                fi
            fi

            score="$(score_for "${problem_id}")"
            failed_count=$((failed_count + 1))
            failures+=("${problem_id}"$'\t'"${code_path}"$'\t'"${score}")
            progress_bar "${retry_index}" "${retry_total}" warn "${problem_id} score=${score} after retry"
        done
    fi

    if [ "${do_submit}" = "1" ] && [ "${#full_scores[@]}" -gt 0 ]; then
        say
        info "Submitting ${#full_scores[@]} full-score answer(s) with ${SUBMIT_JOBS} job(s)."
        completed=0
        total="${#full_scores[@]}"
        submit_next=0
        submit_active=0
        submit_pids=()
        frame=0
        last_state="run"
        last_label="submit queue"
        report_progress 0 "${total}" run "submit queue" 0 0 0 "${frame}"

        while [ "${completed}" -lt "${total}" ]; do
            while [ "${submit_active}" -lt "${SUBMIT_JOBS}" ] && [ "${submit_next}" -lt "${total}" ]; do
                entry="${full_scores[${submit_next}]}"
                problem_id="${entry%%$'\t'*}"
                code_path="${entry#*$'\t'}"
                submit_worker "${problem_id}" "${code_path}" "${TEMP_DIR}" "${submit_next}" &
                submit_pids["${submit_next}"]=$!
                submit_next=$((submit_next + 1))
                submit_active=$((submit_active + 1))
            done

            made_progress=0
            for index in "${!submit_pids[@]}"; do
                pid="${submit_pids[${index}]}"
                if [ -z "${pid}" ]; then
                    continue
                fi

                result_file="${TEMP_DIR}/submit-result.${index}"
                if ! [ -f "${result_file}" ]; then
                    continue
                fi

                wait "${pid}" 2>/dev/null || true
                submit_pids["${index}"]=""
                submit_active=$((submit_active - 1))
                completed=$((completed + 1))
                made_progress=1

                IFS=$'\t' read -r problem_id code_path submit_log status < "${result_file}"
                if [ "${status}" = "0" ]; then
                    submitted_count=$((submitted_count + 1))
                    last_state="submit"
                    last_label="${problem_id} submitted"
                elif [ "${status}" = "skip" ]; then
                    skipped_count=$((skipped_count + 1))
                    last_state="skip"
                    last_label="${problem_id} skipped"
                else
                    submit_failed_count=$((submit_failed_count + 1))
                    submit_failures+=("${problem_id}"$'\t'"${code_path}"$'\t'"${submit_log}")
                    last_state="error"
                    last_label="${problem_id} submit failed"
                fi
                frame=$((frame + 1))
                report_progress "${completed}" "${total}" "${last_state}" "${last_label}" "${submit_active}" "${submitted_count}" "${submit_failed_count}" "${frame}"
            done

            if [ "${made_progress}" -eq 0 ]; then
                frame=$((frame + 1))
                if [ -t 1 ]; then
                    report_progress "${completed}" "${total}" "${last_state}" "${last_label}" "${submit_active}" "${submitted_count}" "${submit_failed_count}" "${frame}"
                fi
                sleep "${POLL_INTERVAL}"
            fi
        done
        finish_live_meter
    fi

    say
    summary_box "${#entries[@]}" "${ok_count}" "${submitted_count}" "${failed_count}" "${do_submit}" "${submit_failed_count}" "${skipped_count}"

    if [ "${#submit_failures[@]}" -gt 0 ]; then
        CLEAN_TEMP=0
        say
        say "${COLOR_BOLD}Submit Failed${COLOR_RESET}"
        say "  logs kept in: ${TEMP_DIR}"
        for entry in "${submit_failures[@]}"; do
            problem_id="${entry%%$'\t'*}"
            entry="${entry#*$'\t'}"
            code_path="${entry%%$'\t'*}"
            submit_log="${entry#*$'\t'}"
            printf '  %s%s%s  file=%s  log=%s\n' "${COLOR_BOLD}" "${problem_id}" "${COLOR_RESET}" "${code_path}" "${submit_log}"
        done
    fi

    if [ "${#failures[@]}" -gt 0 ]; then
        say
        say "${COLOR_BOLD}Needs work${COLOR_RESET}"
        for entry in "${failures[@]}"; do
            problem_id="${entry%%$'\t'*}"
            entry="${entry#*$'\t'}"
            code_path="${entry%%$'\t'*}"
            score="${entry#*$'\t'}"
            show_failure_detail "${problem_id}" "${code_path}" "${score}"
        done
    fi

    if [ "${failed_count}" -eq 0 ]; then
        success "All checked problems are full score."
        if [ "${submit_failed_count}" -eq 0 ]; then
            return 0
        fi
    fi
    return 1
}

main() {
    ensure_tls
    acquire_tls_lock

    local positional=()
    while [ "$#" -gt 0 ]; do
        case "$1" in
            -j|--jobs)
                if [ "$#" -lt 2 ]; then
                    error "$1 requires a value."
                    exit 2
                fi
                MAX_JOBS="$2"
                shift 2
                ;;
            --submit-jobs)
                if [ "$#" -lt 2 ]; then
                    error "$1 requires a value."
                    exit 2
                fi
                SUBMIT_JOBS="$2"
                shift 2
                ;;
            --case-jobs)
                if [ "$#" -lt 2 ]; then
                    error "$1 requires a value."
                    exit 2
                fi
                CASE_JOBS="$2"
                shift 2
                ;;
            --submit-retries)
                if [ "$#" -lt 2 ]; then
                    error "$1 requires a value."
                    exit 2
                fi
                SUBMIT_RETRIES="$2"
                shift 2
                ;;
            *)
                positional+=("$1")
                shift
                ;;
        esac
    done
    set -- "${positional[@]}"

    if [ "$#" -eq 0 ]; then
        ensure_login
        run_all 1
        exit $?
    fi

    if [ "$#" -eq 1 ] && [ "$1" = "--help" ]; then
        usage
        exit 0
    fi

    if [ "$#" -eq 1 ] && [ "$1" = "--check-all" ]; then
        run_all 0
        exit $?
    fi

    if [ "$#" -eq 1 ] && [ "$1" = "--all" ]; then
        ensure_login
        run_all 1
        exit $?
    fi

    if [ "$#" -eq 2 ]; then
        ensure_login
        run_one "$1" "$2" 1 0
        exit $?
    fi

    usage >&2
    exit 2
}

main "$@"
