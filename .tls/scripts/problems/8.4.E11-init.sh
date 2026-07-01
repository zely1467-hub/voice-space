#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="8.4.E11"


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
1
100
10
10000
1000
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
10000
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
const verify = (output) => {return output.trimEnd().match(/---\n10000\s*$/);};
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
10
40
20
70
30
50
60
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
70
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
const verify = (output) => {return output.trimEnd().match(/---\n70\s*$/);};
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
9
1
10
2
9
3
8
4
7
5
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
10
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
const verify = (output) => {return output.trimEnd().match(/---\n10\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF
