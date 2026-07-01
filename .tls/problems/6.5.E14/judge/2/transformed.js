"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    let point = 3 * a + b;
    if (point > 20) {
        Lib.print("OUT\n");
    } else {
        let remain = 20 - point;
        Lib.print(remain + "\n");
    }
}
