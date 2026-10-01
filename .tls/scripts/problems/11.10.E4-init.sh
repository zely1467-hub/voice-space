#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="11.10.E4"


BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
rm -rf ~/"${WORKING_DIR}"
mkdir -p ~/"${WORKING_DIR}"
CASE_NUMBER=0


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
[ {"student_id": 249001, "japanese": 85, "math": 88, "english": 94}, {"student_id": 249002, "japanese": 87, "math": 80, "english": 92}, {"student_id": 249003, "japanese": 83, "math": 78, "english": 85}, {"student_id": 249004, "japanese": 87, "math": 89, "english": 92}, {"student_id": 249005, "japanese": 82, "math": 83, "english": 92} ]
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
249004
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
const verify = (output) => {return output.trimEnd().match(/---\n249004\s*$/);};
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
[ {"student_id": 249001, "japanese": 85, "math": 88, "english": 95}, {"student_id": 249002, "japanese": 97, "math": 80, "english": 92}, {"student_id": 249003, "japanese": 83, "math": 78, "english": 85}, {"student_id": 249004, "japanese": 87, "math": 89, "english": 82}, {"student_id": 249005, "japanese": 82, "math": 83, "english": 92}, {"student_id": 249006, "japanese": 85, "math": 96, "english": 95}, {"student_id": 249007, "japanese": 87, "math": 84, "english": 92}, {"student_id": 249008, "japanese": 87, "math": 95, "english": 94}, {"student_id": 249009, "japanese": 85, "math": 96, "english": 95}, {"student_id": 249010, "japanese": 82, "math": 91, "english": 92} ]
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
249006
249008
249009
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
const verify = (result)=>{ const found = result.trimEnd().match(/---\s+([0-9][0-9,\s]*[0-9])\s*$/); if (found == null) { return false; } let lines = found[1].split(/\s+/); return (lines.sort().join('#') === ['249006','249008','249009'].sort().join('#')); };
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
[ {"student_id": 249001, "japanese": 85, "math": 88, "english": 95}, {"student_id": 249002, "japanese": 87, "math": 80, "english": 92}, {"student_id": 249003, "japanese": 83, "math": 78, "english": 85}, {"student_id": 249004, "japanese": 87, "math": 89, "english": 92}, {"student_id": 249005, "japanese": 82, "math": 83, "english": 92}, {"student_id": 249006, "japanese": 85, "math": 86, "english": 95}, {"student_id": 249007, "japanese": 87, "math": 84, "english": 92}, {"student_id": 249008, "japanese": 83, "math": 99, "english": 96}, {"student_id": 249009, "japanese": 87, "math": 79, "english": 92}, {"student_id": 249010, "japanese": 82, "math": 81, "english": 92}, {"student_id": 249011, "japanese": 85, "math": 98, "english": 95}, {"student_id": 249012, "japanese": 87, "math": 90, "english": 92}, {"student_id": 249013, "japanese": 83, "math": 88, "english": 85}, {"student_id": 249014, "japanese": 87, "math": 99, "english": 92}, {"student_id": 249015, "japanese": 82, "math": 93, "english": 92}, {"student_id": 249016, "japanese": 85, "math": 96, "english": 95}, {"student_id": 249017, "japanese": 87, "math": 94, "english": 92}, {"student_id": 249018, "japanese": 83, "math": 85, "english": 85}, {"student_id": 249019, "japanese": 87, "math": 89, "english": 92}, {"student_id": 249020, "japanese": 82, "math": 91, "english": 92} ]
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
249008
249011
249014
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
const verify = (result)=>{ const found = result.trimEnd().match(/---\s+([0-9][0-9,\s]*[0-9])\s*$/); if (found == null) { return false; } let lines = found[1].split(/\s+/); return (lines.sort().join('#') === ['249008','249011','249014'].sort().join('#')); };
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF
