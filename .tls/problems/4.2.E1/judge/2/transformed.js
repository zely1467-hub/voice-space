"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number : ");
    let a = Number(Lib.input());
    Lib.print("---\n");

    Lib.print(a < 0);
    Lib.print("\n");
}