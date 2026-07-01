"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n1\n2\n3\n4\n5\n6\n7\n6\n5\n4\n3\n2\n1\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
