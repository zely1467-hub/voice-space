"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// if-else文の例
{
    Lib.print("Input the number");
    let a = Number(Lib.input());   // 降水確率

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