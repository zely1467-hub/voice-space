"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");

    let count = 0; 
    let k = 2;     

    while (k <= a) {
        if (a % k === 0) {
            count = count + 1; 
        }
        k = k + 1; 
    }

    Lib.print(count);
    Lib.print("\n");
}