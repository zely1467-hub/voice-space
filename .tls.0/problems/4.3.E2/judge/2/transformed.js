"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the word: ");
    let a = Lib.input();
    Lib.print("Input the word: ");
    let b = Lib.input();
    Lib.print("Input the word: ");
    let c = Lib.input();

    Lib.print("---\n");
    Lib.print(a + b === c);
    Lib.print("\n");

}