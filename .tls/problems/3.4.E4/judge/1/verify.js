"use strict";
const verify = (output) => {return output.trimEnd().match(/---\nApples: 720 yen\nPeaches: 1100 yen\n===\nTotal: 1820 yen\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
