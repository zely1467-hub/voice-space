"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    if (a < 0) {
        Lib.print("NEGATIVE\n");
    } else if (a === 0) {
        Lib.print("ZERO\n");
    } else {
        Lib.print("POSITIVE\n");
    }
}
