"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let price = Number(Lib.input());
    let number = Number(Lib.input());
    Lib.print("---\n");
    if (price * number <= 5000) {
        Lib.print("CAN\n");
    } else {
        Lib.print("CANNOT\n");
    }
}
