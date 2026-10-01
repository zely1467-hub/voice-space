"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number : ");
    let a = Number(Lib.input());
    Lib.print("Input the number : ");
    let n = Number(Lib.input());

    Lib.print("---\n");
    Lib.print(a * n > 2000);
    Lib.print("\n");

}