"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the area of ​​a circle: ");
    let a = Number(Lib.input());

    Lib.print("---\n");
    Lib.print(Math.sqrt(a / Math.PI));
    Lib.print("\n");
}