#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="6.5.R2.1"


BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
rm -rf ~/"${WORKING_DIR}"
mkdir -p ~/"${WORKING_DIR}"
CASE_NUMBER=0


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
(... Secret ...)
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
const verify = (output) => {return output.trimEnd().match(/LINE *\++=+\++\n *3 *\|+: *a *:\|+ *<-+ *BLOCK *3-+29\n *\++-+\++\n *6 *\|+ *"?Silver"? *\|+ *<-+ *INPUT *"?Silver"?\n *\++-+\++\n *7 *\|+ *\|+ *<-+ *if *\(a *=+ *"?Gold"?\): *false\n *\++-+\++=+\++\n *18 *\|+ *\|+: *b *:\|+ *<-+ *ELSE *BLOCK *18-+28\n *\++-+\++-+\++\n *21 *\|+ *\|+ *"?Light *and *soft"? *\|+ *<-+ *INPUT *"?Light *and *soft"?\n *\++-+\++-+\++\n *22 *\|+ *\|+ *\|+ *<-+ *if *\(b *=+ *"?Light *and *soft"?\): *true\n *\++-+\++-+\++=+\++\n *22 *\|+ *\|+ *\|+: *:\|+ *<-+ *IF *BLOCK *22-+24\n *\++-+\++-+\++[=-]+\++\n *23 *\|+ *\|+ *\|+ *\|+ *<-+ *PRINT *"?You *are *Summer.\\n"?\n *\++=+\++=+\++=+\++\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF
