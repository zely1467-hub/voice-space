#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="14.6.E5"


BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
rm -rf ~/"${WORKING_DIR}"
mkdir -p ~/"${WORKING_DIR}"
CASE_NUMBER=0


for ((i = 0; i < 10; i++)); do
for ((j = 0; j < 8; j++)); do

if (( 3 * i + j < 21 )); then
    ANSWER="true"
else
    ANSWER="false"
fi

CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << EOF > ~/"${JUDGE_DIR}/input.txt"
${i}
${j}
EOF
cat << EOF > ~/"${JUDGE_DIR}/expected-output.txt"
---
${ANSWER}
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/transform.js"
"use strict";
const transform = (code) => {return code;};
const fs = require('fs');
if (process.argv.length < 2) { process.exit(1); }
const codeFilename = process.argv[2];
const transformed = transform(fs.readFileSync(codeFilename, "utf8"));
process.stdout.write(transformed);
EOF
cat << EOF > ~/"${JUDGE_DIR}/verify.js"
"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n${ANSWER}\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF

done
done
