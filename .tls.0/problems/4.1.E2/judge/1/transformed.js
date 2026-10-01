"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number of eggs: ");
    let a = Number(Lib.input());
    Lib.print("Input the number of peoples: ");
    let b = Number(Lib.input());

    Lib.print("---\n");
    Lib.print(a % b);
    Lib.print("\n");
}