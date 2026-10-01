"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");

    let num = 1;     
    let count = 0;   

    while (count < a) {
        Lib.print(num);
        Lib.print("\n");

        num = num + 2;     
        count = count + 1; 
    }
}