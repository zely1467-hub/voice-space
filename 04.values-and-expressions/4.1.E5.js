"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the age of Alice: ");
    let a = Number(Lib.input());
    Lib.print("Input the age of Bob: ");
    let b = Number(Lib.input());

    Lib.print("---\n");
    Lib.print(Math.abs(a - b));
    Lib.print("\n");
}