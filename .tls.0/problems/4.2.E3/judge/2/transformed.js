"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number of a: ");
    let a = Number(Lib.input());
    Lib.print("Input the number of b: ");
    let b = Number(Lib.input());

    Lib.print("---\n");
    Lib.print((Math.pow(a, 2)) === b);
    Lib.print("\n");
}