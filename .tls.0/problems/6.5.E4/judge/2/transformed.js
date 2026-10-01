"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the price: ");
    let a = Number(Lib.input());   

    Lib.print("Input the number: ");
    let b = Number(Lib.input());   

    Lib.print("---\n");
    let message;   
    if (a*b>=2000) {
        message = a*b+230;
    }
    else {
        message = a*b+460;
    }
    
    Lib.print(message);
    Lib.print("\n");
}