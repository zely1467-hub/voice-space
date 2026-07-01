#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="7.4.A2"


BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
rm -rf ~/"${WORKING_DIR}"
mkdir -p ~/"${WORKING_DIR}"
CASE_NUMBER=0


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
Hello World
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
dlroW olleH
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
const verify = (output) => {return output.trimEnd().match(/---\ndlroW olleH\s*$/);};
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
Madam, I'm Adam.
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
.madA m'I ,madaM
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
const verify = (output) => {return output.trimEnd().match(/---\n.madA m'I ,madaM\s*$/);};
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
Was it a car or a cat I saw?
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
?was I tac a ro rac a ti saW
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
const verify = (output) => {return output.trimEnd().match(/---\n\?was I tac a ro rac a ti saW\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF
