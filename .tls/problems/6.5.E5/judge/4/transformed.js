"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let year = Number(Lib.input());
    Lib.print("---\n");
    if (year % 400 === 0) {
        Lib.print("366\n");
    } else if (year % 100 === 0) {
        Lib.print("365\n");
    } else if (year % 4 === 0) {
        Lib.print("366\n");
    } else {
        Lib.print("365\n");
    }
}
