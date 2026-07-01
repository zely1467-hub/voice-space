"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    let c = Number(Lib.input());
    Lib.print("---\n");
    if (a <= b) {
        if (b <= c) {
            Lib.print(a + " " + b + " " + c + "\n");
        } else if (a <= c) {
            Lib.print(a + " " + c + " " + b + "\n");
        } else {
            Lib.print(c + " " + a + " " + b + "\n");
        }
    } else {
        if (a <= c) {
            Lib.print(b + " " + a + " " + c + "\n");
        } else if (b <= c) {
            Lib.print(b + " " + c + " " + a + "\n");
        } else {
            Lib.print(c + " " + b + " " + a + "\n");
        }
    }
}
