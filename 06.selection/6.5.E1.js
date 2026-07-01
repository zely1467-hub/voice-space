"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number");
    let a = Number(Lib.input());   

    let message;   
    if (a < 0) {
        message = "NEGATIVE";
    }
    else {
        message = "NONNEGATIVE";
    }
    
    Lib.print(message);
    Lib.print("\n");
}