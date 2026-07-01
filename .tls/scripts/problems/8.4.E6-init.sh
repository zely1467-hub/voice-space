#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="8.4.E6"


BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
rm -rf ~/"${WORKING_DIR}"
mkdir -p ~/"${WORKING_DIR}"
CASE_NUMBER=0


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
5
4
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
OOOOO
XXXXX
OOOOO
XXXXX
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
cat << "EOF" > ~/"${JUDGE_DIR}/verify.js"
"use strict";
const verify = (output) => {return output.trimEnd().match(/---\nOOOOO\nXXXXX\nOOOOO\nXXXXX\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
7
5
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
OOOOOOO
XXXXXXX
OOOOOOO
XXXXXXX
OOOOOOO
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
cat << "EOF" > ~/"${JUDGE_DIR}/verify.js"
"use strict";
const verify = (output) => {return output.trimEnd().match(/---\nOOOOOOO\nXXXXXXX\nOOOOOOO\nXXXXXXX\nOOOOOOO\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
8
7
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
OOOOOOOO
XXXXXXXX
OOOOOOOO
XXXXXXXX
OOOOOOOO
XXXXXXXX
OOOOOOOO
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
cat << "EOF" > ~/"${JUDGE_DIR}/verify.js"
"use strict";
const verify = (output) => {return output.trimEnd().match(/---\nOOOOOOOO\nXXXXXXXX\nOOOOOOOO\nXXXXXXXX\nOOOOOOOO\nXXXXXXXX\nOOOOOOOO\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF
