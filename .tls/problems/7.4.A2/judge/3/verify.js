"use strict";
const verify = (output) => {return output.trimEnd().match(/---\n\?was I tac a ro rac a ti saW\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
