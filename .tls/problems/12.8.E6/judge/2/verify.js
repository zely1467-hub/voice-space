"use strict";
const verify = (result)=>{return result.trimEnd().match(/--- Verification by the evaluation system\s+\[\s*18,\s*24,\s*30\s*\]\s*$/);}
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
