"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number : ");
    let m = Number(Lib.input());
    Lib.print("Input the number : ");
    let n = Number(Lib.input());

    Lib.print("---\n");
    Lib.print((12 * m) % n === 0);
    Lib.print("\n");
}