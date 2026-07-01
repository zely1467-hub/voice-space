"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    if (a % 2 > 0) {
        Lib.print("Odd\n");
    }
    else {
        Lib.print("Even\n");
    }
}