"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = Number(Lib.input()); 
    let b = Number(Lib.input()); 

    Lib.print("---\n");

    let y = 0;
    while (y < b) {
        let x = 0;
        while (x < a) {
            Lib.print("O");
            x = x + 1;
        }
        Lib.print("\n");
        y = y + 1;
    }
}