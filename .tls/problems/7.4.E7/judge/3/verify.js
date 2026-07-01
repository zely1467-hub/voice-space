"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n22\n19\n16\n13\n10\n7\n4\n1\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
