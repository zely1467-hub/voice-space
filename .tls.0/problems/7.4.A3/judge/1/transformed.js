"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input a: ");
    let a = Lib.input(); 
    Lib.print("Input b: ");
    let b = Lib.input(); 

    Lib.print("---\n");

    Lib.print(a);
    Lib.print("\n");

    let spaces = a.length - b.length;

    let i = 0;
    while (i < spaces) {
        Lib.print(" ");
        i = i + 1;
    }

    Lib.print(b);
    Lib.print("\n");
}