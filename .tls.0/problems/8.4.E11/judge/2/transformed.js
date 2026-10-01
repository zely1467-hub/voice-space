"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let n = Number(Lib.input()); 

    let max = 0; 
    let i = 0;

    while (i < n) {
        let x = Number(Lib.input());
        if (x > max) {
            max = x; 
        }
        i = i + 1;
    }

    Lib.print("---\n");
    Lib.print(max);
    Lib.print("\n");
}