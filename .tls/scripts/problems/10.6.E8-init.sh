#!/usr/bin/env bash
set -euo pipefail


PROBLEM_ID="10.6.E8"


BASE_DIR="c/.tls"
WORKING_DIR="${BASE_DIR}/problems/${PROBLEM_ID}"
rm -rf ~/"${WORKING_DIR}"
mkdir -p ~/"${WORKING_DIR}"
CASE_NUMBER=0


#    ['apple\\na round fruit with shiny red or green skin and white flesh\\nstrawberry\\na soft red fruit with very small yellow seeds on the surface\\norange\\na round citrus fruit with thick reddish-yellow skin\\n\\nstrawberry', '---\\na soft red fruit with very small yellow seeds on the surface', (code)=>code, (result)=>{return result.trimEnd().match(/---\\s+a soft red fruit with very small yellow seeds on the surface\\s*$/)}],
#    ['carrot\\na long pointed orange root vegetable\\npumpkin\\na large round vegetable with thik orange skin\\npotato\\na round white vegetable with a brown or red skin\\ntomato\\na soft fruit with a lot of juice and shiny red skin\\n\\npumpkin', '---\\na large round vegetable with thik orange skin', (code)=>code, (result)=>{return result.trimEnd().match(/---\\s+a large round vegetable with thik orange skin\\s*$/)}],
#    ['carrot\\na long pointed orange root vegetable\\npumpkin\\na large round vegetable with thik orange skin\\npotato\\na round white vegetable with a brown or red skin\\ntomato\\na soft fruit with a lot of juice and shiny red skin\\n\\npeanut', '---\\nNOT FOUND', (code)=>code, (result)=>{return result.trimEnd().match(/---\\s+NOT FOUND\\s*$/)}],
#    ['PIN\\nPersonal Identification Number\\nSONAR\\nSound Navigation and Ranging\\nNASA\\nNational Aeronautics and Space Administration\\nRADAR\\nRadio Detection and Ranging\\nUNICEF\\nUnited Nations International Children’s Emergency Fund\\nUNESCO\\nUnited Nations Educational, Scientific and Cultural Organisation\\nCAPTCHA\\nCompletely Automated Public Turing test to tell Computers and Humans Apart\\nLASER\\nLight amplification by stimulated emission of radiation\\nWiFi\\nWireless Fidelity\\nLAN\\nLocal Area Network\\nFIFA\\nFederation Internationale de Football Association\\nTOEFL\\nTest of English as a Foreign Language\\nIELTS\\nInternational English Language Testing System\\n\\nFIFA', '---\\nFederation Internationale de Football Association', (code)=>code, (result)=>{return result.trimEnd().match(/---\\s+Federation Internationale de Football Association\\s*$/)}],


CASE_NUMBER=$((${CASE_NUMBER} + 1))
JUDGE_DIR="${WORKING_DIR}/judge/${CASE_NUMBER}"
mkdir -p ~/"${JUDGE_DIR}"
cat << "EOF" > ~/"${JUDGE_DIR}/input.txt"
apple
a round fruit with shiny red or green skin and white flesh
strawberry
a soft red fruit with very small yellow seeds on the surface
orange
a round citrus fruit with thick reddish-yellow skin

strawberry
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
a soft red fruit with very small yellow seeds on the surface
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
const verify = (output) => {return output.trimEnd().match(/---\s+a soft red fruit with very small yellow seeds on the surface\s*$/);};
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
carrot
a long pointed orange root vegetable
pumpkin
a large round vegetable with thik orange skin
potato
a round white vegetable with a brown or red skin
tomato
a soft fruit with a lot of juice and shiny red skin

pumpkin
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
a large round vegetable with thik orange skin
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
const verify = (output) => {return output.trimEnd().match(/---\s+a large round vegetable with thik orange skin\s*$/);};
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
carrot
a long pointed orange root vegetable
pumpkin
a large round vegetable with thik orange skin
potato
a round white vegetable with a brown or red skin
tomato
a soft fruit with a lot of juice and shiny red skin

peanut
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
NOT FOUND
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
const verify = (output) => {return output.trimEnd().match(/---\nNOT FOUND\s*$/);};
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
PIN
Personal Identification Number
SONAR
Sound Navigation and Ranging
NASA
National Aeronautics and Space Administration
RADAR
Radio Detection and Ranging
UNICEF
United Nations International Children’s Emergency Fund
UNESCO
United Nations Educational, Scientific and Cultural Organisation
CAPTCHA
Completely Automated Public Turing test to tell Computers and Humans Apart
LASER
Light amplification by stimulated emission of radiation
WiFi
Wireless Fidelity
LAN
Local Area Network
FIFA
Federation Internationale de Football Association
TOEFL
Test of English as a Foreign Language
IELTS
International English Language Testing System

FIFA
EOF
cat << "EOF" > ~/"${JUDGE_DIR}/expected-output.txt"
---
Federation Internationale de Football Association
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
const verify = (output) => {return output.trimEnd().match(/---\s+Federation Internationale de Football Association\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
EOF
