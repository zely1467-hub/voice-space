"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    let absences = a + Math.floor(b / 3);
    Lib.print(absences < 7);
    Lib.print("\n");
}
