#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="4.3.E11"


BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
rm -rf ~/"${WORKING_DIR}"
mkdir -p ~/"${WORKING_DIR}"
CASE_NUMBER=0


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
abc(def)ghi
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
def
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
const verify = (output) => {return output.trimEnd().match(/---\ndef\s*$/);};
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
Math.floor(Math.PI * r * r) + 100
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
Math.PI * r * r
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
const verify = (output) => {return output.trimEnd().match(/---\nMath\.PI \* r \* r\s*$/);};
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
Zennism, like Taoism, is the worship of Relativity. One master defines Zen as the art of feeling the polar star in the southern sky. Truth can be reached only through the comprehension of opposites. Again, Zennism, like Taoism, is a strong advocate of individualism. Nothing is real except that which concerns the working of our own minds. Yeno, the sixth patriarch, once saw two monks watching the flag of a pagoda fluttering in the wind. One said "It is the wind that moves," the other said "It is the flag that moves"; but Yeno explained to them that the real movement was neither of the wind nor the flag, but of something within their own minds. Hiakujo was walking in the forest with a disciple when a hare scurried off at their approach. "Why does the hare fly from you?" asked Hiakujo. "Because he is afraid of me," was the answer. "No," said the master, "it is because you have murderous instinct." The dialogue recalls that of Soshi (Chaungtse), the Taoist. One day Soshi was walking on the bank of a river with a friend. "How delightfully the fishes are enjoying themselves in the water!" exclaimed Soshi. His friend spake to him thus: "You are not a fish; how do you know that the fishes are enjoying themselves?" "You are not myself," returned Soshi; "how do you know that I do not know that the fishes are enjoying themselves?"
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
Chaungtse
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
const verify = (output) => {return output.trimEnd().match(/---\nChaungtse\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF
