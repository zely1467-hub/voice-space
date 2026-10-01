"use strict";
const verify = (output) => {return output.trimEnd().match(/(^|[^\w])Alice: 830 yen\nBob: 640 yen\nCarol: 1990 yen\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
