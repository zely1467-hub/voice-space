"use strict";
const verify = (output) => {return output.trimEnd().match(/---\nOOOOOOO\nOOOOOOO\nOOOOOOO\nOOOOOOO\nOOOOOOO\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
