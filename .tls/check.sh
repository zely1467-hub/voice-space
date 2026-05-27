#!/usr/bin/env bash
set -uo pipefail


BASE_URL="/toby/2026/c.draft"
ACCESS_CHECK_CHALLENGE_URL="${BASE_URL}/challenge/access-check.txt"
SUBMIT_URL="${BASE_URL}/challenge/submit.cgi"

if ! [ "$#" -eq 2 ]; then
    echo "USAGE: <THIS_SCRIPT> <PROBLEM_ID> <SOURCE_CODE_PATH>" 1>&2
    exit
fi
PROBLEM_ID="$1"
CODE_PATH="$2"
BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
AUTH_PATH="${BASE_DIR}/data/auth"

PROBLEM_SCRIPT_DIR="${BASE_DIR}/scripts/problems"
INIT_SCRIPT="${PROBLEM_SCRIPT_DIR}/${PROBLEM_ID}-init.sh"
CHECK_SCRIPT="${PROBLEM_SCRIPT_DIR}/${PROBLEM_ID}-check.sh"
DEFAULT_SCRIPT="${PROBLEM_SCRIPT_DIR}/check.default.sh"
SHOW_TITLE_SCRIPT="${BASE_DIR}/scripts/show-title.sh"
ACCESS_SCRIPT="${BASE_DIR}/scripts/access-check.js"
SET_ACCOUNT_SCRIPT="${BASE_DIR}/scripts/set-account.sh"
SUBMIT_SCRIPT="${BASE_DIR}/scripts/submit.js"


if ! [ -f ~/"${INIT_SCRIPT}" ]; then
    echo "[ERROR] No problem with ID '${PROBLEM_ID}'" 1>&2
    exit
fi

if [ ~/"${INIT_SCRIPT}" -nt ~/"${WORKING_DIR}" ]; then
    ~/"${INIT_SCRIPT}"
fi

if ! [ -f "${CODE_PATH}" ]; then
    echo "[ERROR] The file '${CODE_PATH}' does not exist." 1>&2
    exit
fi

echo
~/"${SHOW_TITLE_SCRIPT}"
echo

if ! [ -f ~/"${CHECK_SCRIPT}" ]; then
    ~/"${DEFAULT_SCRIPT}" "${PROBLEM_ID}" "${CODE_PATH}"
else
    ~/"${CHECK_SCRIPT}" "${CODE_PATH}"
fi

ACCESS_SCRIPT_RESULT=1
echo -e "\e[0;34mConnecting to the server...\e[0;0m"
#echo -e "\e[0;34mAuthenticating...\e[0;0m"
if [ -f ~/"${AUTH_PATH}" ]; then
    timeout 5s node ~/"${ACCESS_SCRIPT}" "${ACCESS_CHECK_CHALLENGE_URL}"
    ACCESS_SCRIPT_RESULT=$?
    if [ ${ACCESS_SCRIPT_RESULT} -eq 1 ]; then
        echo -e "\e[0;35mNo valid account registered.\e[0;0m"
    fi
fi

if [ ${ACCESS_SCRIPT_RESULT} -eq 1 ]; then
    echo
fi
while [ ${ACCESS_SCRIPT_RESULT} -eq 1 ]; do
    ~/"${SET_ACCOUNT_SCRIPT}" "${ACCESS_CHECK_CHALLENGE_URL}"
    ACCESS_SCRIPT_RESULT=$?
    echo
done

if [ ${ACCESS_SCRIPT_RESULT} -ne 0 ]; then
    echo -e "\e[1;31m[ERROR] Unexpected error occurred.\e[0;0m" 1>&2
    echo
    echo -e "\e[1;36m### CODE SUBMISSION: \e[1;31mFAILED\e[0;0m"
    echo -e "\e[0;31m何らかの理由によりコードの提出は失敗しました\e[0;0m"
    echo
    exit
fi

echo -e "\e[0;34mSending data...\e[0;0m"
SUBMIT_SCRIPT_OUTPUT="$(timeout 5s node ~/"${SUBMIT_SCRIPT}" "${PROBLEM_ID}" "${SUBMIT_URL}")"
SUBMIT_SCRIPT_RESULT=$?
if [ ${SUBMIT_SCRIPT_RESULT} -eq 0 ]; then
    echo -e "\e[0;34m${SUBMIT_SCRIPT_OUTPUT}\e[0;0m"
    echo
    echo -e "\e[1;36m### CODE SUBMISSION: \e[1;32mSUCCEEDED\e[0;0m"
    echo -e "\e[0;32mコードは提出されました\e[0;0m"
else
    echo
    echo -e "\e[1;36m### CODE SUBMISSION: \e[1;31mFAILED\e[0;0m"
    echo -e "\e[0;31m何らかの理由によりコードの提出は失敗しました\e[0;0m"
fi
echo
