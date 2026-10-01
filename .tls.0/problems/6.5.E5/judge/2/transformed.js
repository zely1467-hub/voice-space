"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the year: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");
    let message;   
    if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
        message = 366;
    }
    else {
        message = 365;
    }
    
    Lib.print(message);
    Lib.print("\n");
}