"use strict";
const verify = (output) => {return output.trimEnd().match(/---\s+XXXXXXXXXXXXXXXXXXXXXXXXXXX\nX XX XX XX XX XX XX XX XX X\nXXXXXXXXXXXXXXXXXXXXXXXXXXX\nXXX   XXXXXX   XXXXXX   XXX\nX X   X XX X   X XX X   X X\nXXX   XXXXXX   XXXXXX   XXX\nXXXXXXXXXXXXXXXXXXXXXXXXXXX\nX XX XX XX XX XX XX XX XX X\nXXXXXXXXXXXXXXXXXXXXXXXXXXX\nXXXXXXXXX         XXXXXXXXX\nX XX XX X         X XX XX X\nXXXXXXXXX         XXXXXXXXX\nXXX   XXX         XXX   XXX\nX X   X X         X X   X X\nXXX   XXX         XXX   XXX\nXXXXXXXXX         XXXXXXXXX\nX XX XX X         X XX XX X\nXXXXXXXXX         XXXXXXXXX\nXXXXXXXXXXXXXXXXXXXXXXXXXXX\nX XX XX XX XX XX XX XX XX X\nXXXXXXXXXXXXXXXXXXXXXXXXXXX\nXXX   XXXXXX   XXXXXX   XXX\nX X   X XX X   X XX X   X X\nXXX   XXXXXX   XXXXXX   XXX\nXXXXXXXXXXXXXXXXXXXXXXXXXXX\nX XX XX XX XX XX XX XX XX X\nXXXXXXXXXXXXXXXXXXXXXXXXXXX\s*$/);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
