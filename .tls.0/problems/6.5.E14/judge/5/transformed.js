"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input absence (a): ");
    let a = Number(Lib.input());   

    Lib.print("Input tardiness (b): ");
    let b = Number(Lib.input());   

    Lib.print("---\n");

    let totalAbsence = a + Math.floor(b / 3);

    if (totalAbsence > 6) {
        Lib.print("OUT");
    } else {
        let remainingAbsence = 6 - a;

        let maxRemTardiness = (remainingAbsence * 3 + 2) - b;

        Lib.print(maxRemTardiness);
    }

    Lib.print("\n");
}