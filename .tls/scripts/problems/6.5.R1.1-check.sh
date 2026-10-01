#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="6.5.R1.1"
EXT="txt"
EXEC_TIME="5s"

BASE_DIR="c/.tls"


FILE_PATH="$1" # absolute path
FILE_NAME=$(basename "${FILE_PATH}")
FILE_EXTENSION="${FILE_NAME##*.}"
if ! [ -f "${FILE_PATH}" ]; then
    echo "ERROR: The file '${FILE_PATH}' does not exist." 1>&2
    exit
fi
#if ! [ "${FILE_EXTENSION}" == "${EXT}" ]; then
#    echo "ERROR: The file extension is not '${EXT}', but '${FILE_EXTENSION}'." 1>&2
#    exit
#fi

WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
cp "$FILE_PATH" ~/"${WORKING_DIR}/code.txt"
cd ~/"${WORKING_DIR}"
rm -f "test_result.txt" "score.txt"
TEST_RESULT=""
ACCEPTED_NUMBER=0
CASE_NUMBER=0
JUDGE_DIR="${WORKING_DIR}/judge"
for i in $(ls -v ~/"${JUDGE_DIR}"); do
CASE_DIR="${JUDGE_DIR}/${i}"
cd ~/"${CASE_DIR}"
rm -f "a.out" "compile-error.txt" "output.txt" "error.txt" "result.txt"

node "transform.js" ~/"${WORKING_DIR}/code.txt" > "transformed.${EXT}"

set +e
timeout "${EXEC_TIME}" cat "transformed.${EXT}" > "output.txt" 2> "error.txt"
if ! [ $? -eq 0 ]; then
    CASE_RESULT="R"
    echo "R" > "result.txt"
else
    node "verify.js" > "result.txt"
    cd ~/"${WORKING_DIR}"
    CASE_RESULT=$(cat ~/"${CASE_DIR}/result.txt")
fi
set -e

TEST_RESULT="${TEST_RESULT}${CASE_RESULT}"
CASE_NUMBER=$((${CASE_NUMBER} + 1))
if [ "${CASE_RESULT}" == "1" ]; then
    ACCEPTED_NUMBER=$((${ACCEPTED_NUMBER} + 1))
    echo -e "\e[1;36m### CASE #${i}: \e[1;32mACCEPTED\e[0;0m"
    echo -e "\e[0;35m# INPUT\e[0;0m" 
    cat ~/"${CASE_DIR}/input.txt"
    echo -e "\e[0;35m# EXPECTED OUTPUT\e[0;0m" 
    cat ~/"${CASE_DIR}/expected-output.txt"
    echo -e "\e[0;35m# YOUR OUTPUT\e[0;0m" 
    cat ~/"${CASE_DIR}/output.txt"
elif [ "${CASE_RESULT}" == "0" ]; then
    echo -e "\e[1;36m### CASE #${i}: \e[1;31mWRONG ANSWER\e[0;0m"
    echo -e "\e[0;35m# INPUT\e[0;0m" 
    cat ~/"${CASE_DIR}/input.txt"
    echo -e "\e[0;35m# EXPECTED OUTPUT\e[0;0m" 
    cat ~/"${CASE_DIR}/expected-output.txt"
    echo -e "\e[0;35m# YOUR OUTPUT\e[0;0m" 
    cat ~/"${CASE_DIR}/output.txt"
elif [ "${CASE_RESULT}" == "C" ]; then
    echo -e "\e[1;36m### CASE #${i}: \e[1;31mCOMPILE ERROR\e[0;0m"
    echo -e "\e[0;35m# Compilation failed.\e[0;0m"
    cat ~/"${CASE_DIR}/compile-error.txt"
elif [ "${CASE_RESULT}" == "R" ]; then
    echo -e "\e[1;36m### CASE #${i}: \e[1;31mRUNTIME ERROR\e[0;0m"
    echo -e "\e[0;35mThe program terminated by some error or timeout.\e[0;0m"
    cat ~/"${CASE_DIR}/error.txt"
fi
echo ""
done

SCORE=$((100 * ${ACCEPTED_NUMBER} / ${CASE_NUMBER}))
echo "${TEST_RESULT}" > ~/"${WORKING_DIR}/test_result.txt"
echo "${SCORE}" > ~/"${WORKING_DIR}/score.txt"

echo -e "\e[1;36m### EVALUATION SUMMARY\e[0;0m"
for i in $(ls -v ~/"${JUDGE_DIR}"); do
CASE_DIR="${JUDGE_DIR}/${i}"
CASE_RESULT=$(cat ~/"${CASE_DIR}/result.txt")
if [ "${CASE_RESULT}" == "1" ]; then
    echo -e "\e[1;35mCASE #${i}: \e[1;32mACCEPTED\e[0;0m"
elif [ "${CASE_RESULT}" == "0" ]; then
    echo -e "\e[1;35mCASE #${i}: \e[1;31mWRONG ANSWER\e[0;0m"
elif [ "${CASE_RESULT}" == "C" ]; then
    echo -e "\e[1;35mCASE #${i}: \e[1;31mCOMPILE ERROR\e[0;0m"
elif [ "${CASE_RESULT}" == "R" ]; then
    echo -e "\e[1;35mCASE #${i}: \e[1;31mRUNTIME ERROR\e[0;0m"
fi
done
echo -e "\e[1;36m### YOUR SCORE: ${SCORE}\e[0;0m"
if [ "${SCORE}" == "100" ]; then
    echo -e "\e[0;32m٩(๑>ᴗ<๑)۶ \e[1;32mオメデト～🍰☕\e[0;0m" 
else
    echo -e "\e[0;31m٩(๑•ω•๑)و⚑ \e[1;31mファイト！🌟\e[0;0m" 
fi
echo ""
