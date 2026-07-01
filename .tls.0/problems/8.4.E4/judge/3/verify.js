"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n1\n2,2\n3,3,3\n4,4,4,4\n5,5,5,5,5\n6,6,6,6,6,6\n7,7,7,7,7,7,7\n8,8,8,8,8,8,8,8\n9,9,9,9,9,9,9,9,9\n10,10,10,10,10,10,10,10,10,10\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
