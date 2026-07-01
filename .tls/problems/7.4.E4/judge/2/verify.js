"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n0\n5\n10\n15\n20\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
