"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let year = Number(Lib.input());
    let month = Number(Lib.input());
    Lib.print("---\n");
    if (month === 2) {
        if (year % 400 === 0) {
            Lib.print("29\n");
        } else if (year % 100 === 0) {
            Lib.print("28\n");
        } else if (year % 4 === 0) {
            Lib.print("29\n");
        } else {
            Lib.print("28\n");
        }
    } else if (month === 4) {
        Lib.print("30\n");
    } else if (month === 6) {
        Lib.print("30\n");
    } else if (month === 9) {
        Lib.print("30\n");
    } else if (month === 11) {
        Lib.print("30\n");
    } else {
        Lib.print("31\n");
    }
}
