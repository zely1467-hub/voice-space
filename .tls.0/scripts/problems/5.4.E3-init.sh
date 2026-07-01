#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="5.4.E3"


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
const verify = (output) => {return output.trimEnd().match(/LINE *\++=+\++=+\++ *\n+ *3 *\|+: *a *:\|+: *sum *:\|+ *<-+ *BLOCK *3-+21 *\n+ *\++-+\++-+\++ *\n+ *4 *\|+ *0 *\|+ *\|+ *\n+ *\++-+\++-+\++ *\n+ *5 *\|+ *\|+ *0 *\|+ *\n+ *\++-+\++-+\++ *\n+ *6 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?0"? *\n+ *\++-+\++-+\++ *\n+ *7 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++-+\++ *\n+ *11 *\|+ *1 *\|+ *\|+ *\n+ *\++-+\++-+\++ *\n+ *12 *\|+ *\|+ *1 *\|+ *\n+ *\++-+\++-+\++ *\n+ *13 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?1"? *\n+ *\++-+\++-+\++ *\n+ *14 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++-+\++ *\n+ *16 *\|+ *2 *\|+ *\|+ *\n+ *\++-+\++-+\++ *\n+ *17 *\|+ *\|+ *3 *\|+ *\n+ *\++-+\++-+\++ *\n+ *18 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?3"? *\n+ *\++-+\++-+\++ *\n+ *19 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++-+\++ *\n+ *21 *\|+ *3 *\|+ *\|+ *\n+ *\++-+\++-+\++ *\n+ *22 *\|+ *\|+ *6 *\|+ *\n+ *\++-+\++-+\++ *\n+ *23 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?6"? *\n+ *\++-+\++-+\++ *\n+ *24 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++-+\++ *\n+ *26 *\|+ *4 *\|+ *\|+ *\n+ *\++-+\++-+\++ *\n+ *27 *\|+ *\|+ *10 *\|+ *\n+ *\++-+\++-+\++ *\n+ *28 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?10"? *\n+ *\++-+\++-+\++ *\n+ *29 *\|+ *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++=+\++=+\++\s*$/i);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF
