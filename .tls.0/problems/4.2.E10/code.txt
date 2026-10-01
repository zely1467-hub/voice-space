"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the day of April : ");
    let d = Number(Lib.input());

    Lib.print("---\n");
    Lib.print(d % 7 === 4 || d % 7 === 5);
    Lib.print("\n");

}