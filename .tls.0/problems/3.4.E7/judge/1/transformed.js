"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number: ");
    let a = Number (Lib.input());

    Lib.print("Input the number: ");
    let b = Number (Lib.input());

    Lib.print("Input the number: ");
    let c = Number (Lib.input());

    Lib.print("Input the number: ");
    let d = Number (Lib.input());

    Lib.print("Input the number: ");
    let e = Number (Lib.input());

    Lib.print("---");
    Lib.print("\n");

    Lib.print((a + b + c + d + e) / 5);
    Lib.print("\n");
}