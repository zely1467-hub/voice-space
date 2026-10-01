"use strict";
const verify = (output) => {return output.trimEnd().match(/---\s+a soft red fruit with very small yellow seeds on the surface\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
