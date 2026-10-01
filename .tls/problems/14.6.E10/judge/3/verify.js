"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n1\n2\n6\n24\n120\n720\n5040\n40320\n362880\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
