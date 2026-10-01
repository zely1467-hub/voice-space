"use strict";
const verify = (result)=>{ const found = result.trimEnd().match(/---\s+([0-9][0-9,\s]*[0-9])\s*$/); if (found == null) { return false; } let lines = found[1].split(/\s+/); return (lines.sort().join('#') === ['249008','249011','249014'].sort().join('#')); };
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
