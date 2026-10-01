"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input year: ");
    let year = Number(Lib.input());   

    Lib.print("Input month: ");
    let month = Number(Lib.input());   

    Lib.print("---\n");

    let days;

    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            days = 29; 
        } else {
            days = 28; 
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    } else {
        days = 31;
    }

    Lib.print(days);
    Lib.print("\n");
}