"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the word: ");
    let a = Lib.input();

    Lib.print("Input the word: ");
    let b = Lib.input();

    Lib.print("---");
    Lib.print("\n");

    Lib.print(a + b);
    Lib.print("\n");
}