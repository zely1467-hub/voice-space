"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = 3;
    while (a > 1) {
        if (a % 2 === 0) {
            a = a / 2;
        }
        else {
            a = 3 * a + 1;
        }
        Lib.print(a);
        Lib.print("\n");
    }
}