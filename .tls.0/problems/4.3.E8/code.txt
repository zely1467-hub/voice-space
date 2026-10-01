"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the 7 numeric characters: ");
    let a = Lib.input();
    Lib.print("---\n");
    let length = Lib.length(a);
    let first_three = Lib.slice(a, 0, 3);
    let last_four = Lib.slice(a, 3, 7);
    Lib.print(first_three + - +last_four);

    Lib.print("\n");     
}