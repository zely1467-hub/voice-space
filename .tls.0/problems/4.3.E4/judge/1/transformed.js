"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the word: ");
    let a = Lib.input();
    Lib.print("Input the number: ");
    let n = Number(Lib.input());

    Lib.print("---\n");
    Lib.print(Lib.charAt(a, n));
    Lib.print("\n");

}