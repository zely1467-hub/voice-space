"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the price: ");
    let a = Number(Lib.input());   

    Lib.print("Input the number: ");
    let b = Number(Lib.input());   

    Lib.print("---\n");
    let message;   
    if (a*b<=5000) {
        message = "CAN";
    }
    else {
        message = "CANNOT";
    }
    
    Lib.print(message);
    Lib.print("\n");
}