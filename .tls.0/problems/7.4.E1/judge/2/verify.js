"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n5\n6\n7\n8\n9\n10\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
