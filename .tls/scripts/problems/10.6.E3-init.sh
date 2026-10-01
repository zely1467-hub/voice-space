#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="10.6.E3"

# ['[0, 1, 2, 3, 4]', '---\\n0\\n1\\n4\\n9\\n16', (code)=>code, (result)=>{return result.trimEnd().match(/---\\s+0\\s+1\\s+4\\s+9\\s+16\\s*$/)}],
# ['[10, 11, 12, 13, 14, 15]', '---\\n100\\n121\\n144\\n169\\n196\\n225', (code)=>code, (result)=>{return result.trimEnd().match(/---\\s+100\\s+121\\s+144\\s+169\\s+196\\s+225\\s*$/)}],
# ['[100, 101, 102, 103, 104, 105, 106]', '---\\n10000\\n10201\\n10404\\n10609\\n10816\\n11025\\n11236', (code)=>code, (result)=>{return result.trimEnd().match(/---\\s+10000\\s+10201\\s+10404\\s+10609\\s+10816\\s+11025\\s+11236\\s*$/)}]


BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
rm -rf ~/"${WORKING_DIR}"
mkdir -p ~/"${WORKING_DIR}"
CASE_NUMBER=0


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
[0, 1, 2, 3, 4]
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
0
1
4
9
16
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
const verify = (output) => {return output.trimEnd().match(/---\s+0\s+1\s+4\s+9\s+16\s*$/);};
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
[10, 11, 12, 13, 14, 15]
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
100
121
144
169
196
225
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
const verify = (output) => {return output.trimEnd().match(/---\s+100\s+121\s+144\s+169\s+196\s+225\s*$/);};
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
[100, 101, 102, 103, 104, 105, 106]
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
10000
10201
10404
10609
10816
11025
11236
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
const verify = (output) => {return output.trimEnd().match(/---\s+10000\s+10201\s+10404\s+10609\s+10816\s+11025\s+11236\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF
