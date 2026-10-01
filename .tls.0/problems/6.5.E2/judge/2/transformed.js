"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("Input the number: ");
    let b = Number(Lib.input());   

    Lib.print("---\n");
    let message;   
    if (a===b) {
        message = "EQUAL";
    }
    else {
        message = "UNEQUAL";
    }
    
    Lib.print(message);
    Lib.print("\n");
}