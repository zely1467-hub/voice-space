"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");

    let cnt = 1; 

    while (cnt <= a) {
        if (cnt % 2 !== 0) {
            Lib.print("1");
        } else {
            Lib.print("0");
        }
        cnt = cnt + 1;
    }

    Lib.print("\n"); 
}