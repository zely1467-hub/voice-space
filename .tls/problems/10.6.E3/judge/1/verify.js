"use strict";
const verify = (output) => {return output.trimEnd().match(/---\s+0\s+1\s+4\s+9\s+16\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
