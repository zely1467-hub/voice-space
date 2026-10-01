"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");

    let fact = 1; 
    let k = 1;    

    while (k <= a) {
        fact = fact * k; 
        Lib.print(fact);
        Lib.print("\n");
        k = k + 1;       
    }
}