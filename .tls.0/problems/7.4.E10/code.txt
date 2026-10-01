"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");

    let sum = 0; 
    let k = 1;  

    while (k <= a) {
        sum = sum + (k * k); 
        k = k + 1;
    }

    Lib.print(sum);
    Lib.print("\n");
}