"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n1\n3\n5\n7\n9\n11\n13\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
