"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("Input the number: ");
    let b = Number(Lib.input());   

    Lib.print("Input the number: ");
    let c = Number(Lib.input());   

    Lib.print("Input the number: ");
    let d = Number(Lib.input());   

    Lib.print("---\n");

    let min = a;

    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    if (d < min) {
        min = d;
    }

    Lib.print(min);
    Lib.print("\n");
}