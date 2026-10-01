"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n14\n13\n12\n11\n10\n9\n8\n7\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
