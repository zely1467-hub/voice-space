#!/usr/bin/env bash
set -uo pipefail

BASE_DIR="c/.tls"
AUTH_FILE_PATH="${BASE_DIR}/data/auth"
ACCESS_SCRIPT="${BASE_DIR}/scripts/access-check.js"

if ! [ "$#" -eq 1 ]; then
    echo "USAGE: <THIS_SHELL_SCRIPT> <URL>" 1>&2
    exit
fi
URL="$1" # absolute path

echo -e "\e[1;33m### SET ACCOUNT INFORMATION\e[0;0m"
echo -n -e "\e[0;35mUSERNAME> \e[0;0m"
read USERNAME
echo -n -e "\e[0;35mPASSWORD> \e[0;0m"
read -s PASSWORD
echo
echo -n "A$(echo -n "${USERNAME}:${PASSWORD}" | base64)" | base64 > ~/"${AUTH_FILE_PATH}"
echo -e "\e[0;35mAuthenticating...\e[0;0m"
timeout 15s node ~/"${ACCESS_SCRIPT}" "${URL}"
RESULT=$?
if [[ RESULT -eq 0 ]]; then
    echo -e "\e[1;32m[SUCCESS] Signed in successfully.\e[0;0m"
elif [[ RESULT -eq 1 ]]; then
    echo -e "\e[1;31m[ERROR] Incorrect username or password.\e[0;0m"
else
    echo -e "\e[1;31m[ERROR] Sign-in failed. Unexpected error occurred.\e[0;0m"
fi
exit ${RESULT}
