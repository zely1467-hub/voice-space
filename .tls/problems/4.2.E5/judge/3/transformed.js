"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number : ");
    let a = Number(Lib.input());
    Lib.print("Input the number : ");
    let b = Number(Lib.input());

    Lib.print("---\n");
    Lib.print(Math.floor(a / b) === a % b);
    Lib.print("\n");
}