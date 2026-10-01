"use strict";
const verify = (output) => {return output.trimEnd().match(/---\s+10000\s+10201\s+10404\s+10609\s+10816\s+11025\s+11236\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
