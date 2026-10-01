"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");

    let message;
    if (a < 0) {
        message = "NEGATIVE";
    } else if (a === 0) {
        message = "ZERO";
    } else {
        message = "POSITIVE";
    }

    Lib.print(message);
    Lib.print("\n");
}