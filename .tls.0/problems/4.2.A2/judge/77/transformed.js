"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number : ");
    let a = Number(Lib.input());
    Lib.print("Input the number : ");
    let b = Number(Lib.input());

    Lib.print("---\n");
    /* Lib.print(a !== b && b !== c && c!== a);*/
    Lib.print(a < 7 && b < 3 || a < 6 && b < 6 || a < 5 && b < 9 || a < 4 && b < 12 || a < 3 && b < 15 || a < 2 && b < 18 || a < 1 && b < 21);
    Lib.print("\n");

}