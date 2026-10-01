"use strict";
const verify = (output) => {return output.trimEnd().match(/---\s+100\s+121\s+144\s+169\s+196\s+225\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
