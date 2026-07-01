"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n1\n22\n333\n4444\n55555\n666666\n7777777\n88888888\n999999999\n10101010101010101010\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
