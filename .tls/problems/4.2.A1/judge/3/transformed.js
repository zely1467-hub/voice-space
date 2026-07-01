"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    let c = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a);
    Lib.print("\n");
}
