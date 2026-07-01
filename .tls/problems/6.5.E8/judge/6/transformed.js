"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let d = Number(Lib.input());
    Lib.print("---\n");
    if (d % 7 === 1) {
        Lib.print("Friday\n");
    } else if (d % 7 === 2) {
        Lib.print("Saturday\n");
    } else if (d % 7 === 3) {
        Lib.print("Sunday\n");
    } else if (d % 7 === 4) {
        Lib.print("Monday\n");
    } else if (d % 7 === 5) {
        Lib.print("Tuesday\n");
    } else if (d % 7 === 6) {
        Lib.print("Wednesday\n");
    } else {
        Lib.print("Thursday\n");
    }
}
