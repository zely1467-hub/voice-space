#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="12.8.E4"


BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
rm -rf ~/"${WORKING_DIR}"
mkdir -p ~/"${WORKING_DIR}"
CASE_NUMBER=0


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
Lib.print("--- Verification by the evaluation system\n");
Lib.print(mean([2, 3, 4]));
Lib.print("\n");
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
--- Verification by the evaluation system
3
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/transform.js"
"use strict";
const transform = (code)=>{return code.replace(/\}\s*$/, ` Lib.print('--- Verification by the evaluation system\\n'); Lib.print(mean([2, 3, 4])); Lib.print('\\n'); }`); }
const fs = require('fs');
if (process.argv.length < 2) { process.exit(1); }
const codeFilename = process.argv[2];
const transformed = transform(fs.readFileSync(codeFilename, "utf8"));
process.stdout.write(transformed);
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/verify.js"
"use strict";
const verify = (result)=>{return result.trimEnd().match(/--- Verification by the evaluation system\s+3\s*$/);}
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
Lib.print("--- Verification by the evaluation system\n");
Lib.print(mean([2, 4, 6]));
Lib.print("\n");
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
--- Verification by the evaluation system
4
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/transform.js"
"use strict";
const transform = (code)=>{return code.replace(/\}\s*$/, ` Lib.print('--- Verification by the evaluation system\\n'); Lib.print(mean([2, 4, 6])); Lib.print('\\n'); }`); }
const fs = require('fs');
if (process.argv.length < 2) { process.exit(1); }
const codeFilename = process.argv[2];
const transformed = transform(fs.readFileSync(codeFilename, "utf8"));
process.stdout.write(transformed);
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/verify.js"
"use strict";
const verify = (result)=>{return result.trimEnd().match(/--- Verification by the evaluation system\s+4\s*$/);};
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
Lib.print("--- Verification by the evaluation system\n");
Lib.print(mean([20, 22, 24, 26, 28, 30]));
Lib.print("\n");
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
--- Verification by the evaluation system
25
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/transform.js"
"use strict";
const transform = (code)=>{return code.replace(/\}\s*$/, ` Lib.print('--- Verification by the evaluation system\\n'); Lib.print(mean([20, 22, 24, 26, 28, 30])); Lib.print('\\n'); }`); };
const fs = require('fs');
if (process.argv.length < 2) { process.exit(1); }
const codeFilename = process.argv[2];
const transformed = transform(fs.readFileSync(codeFilename, "utf8"));
process.stdout.write(transformed);
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/verify.js"
"use strict";
const verify = (result)=>{return result.trimEnd().match(/--- Verification by the evaluation system\s+25\s*$/);};
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
Lib.print("--- Verification by the evaluation system\\n");
Lib.print(mean([2]));
Lib.print("\\n");
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
--- Verification by the evaluation system
2
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/transform.js"
"use strict";
const transform = (code)=>{return code.replace(/\}\s*$/, ` Lib.print('--- Verification by the evaluation system\\n'); Lib.print(mean([2])); Lib.print('\\n'); }`); };
const fs = require('fs');
if (process.argv.length < 2) { process.exit(1); }
const codeFilename = process.argv[2];
const transformed = transform(fs.readFileSync(codeFilename, "utf8"));
process.stdout.write(transformed);
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/verify.js"
"use strict";
const verify = (result)=>{return result.trimEnd().match(/--- Verification by the evaluation system\s+2\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF


