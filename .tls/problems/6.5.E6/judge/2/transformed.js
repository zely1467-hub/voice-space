"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    if (a <= b) {
        Lib.print(a + " " + b + "\n");
    } else {
        Lib.print(b + " " + a + "\n");
    }
}
