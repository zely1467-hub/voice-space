"use strict";

const { link } = require("fs");

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number : ");
    let a = Number(Lib.input());
    Lib.print("Input the number : ");
    let m = Number(Lib.input());
    Lib.print("Input the number : ");
    let b = Number(Lib.input());
    Lib.print("Input the number : ");
    let n = Number(Lib.input());

    Lib.print("---\n");
    Lib.print(a + b <= 500 && m + n <= 10);
    Lib.print("\n");

}