"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number : ");
    let a = Number(Lib.input());
    Lib.print("Input the number : ");
    let b = Number(Lib.input());
    Lib.print("Input the number : ");
    let c = Number(Lib.input());

    Lib.print("---\n");
    /* Lib.print(a !== b && b !== c && c!== a);*/
    Lib.print(a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a);
    Lib.print("\n");

}