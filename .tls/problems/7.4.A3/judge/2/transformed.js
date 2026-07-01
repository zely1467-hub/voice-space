"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    let b = Lib.input();
    Lib.print("---\n");
    Lib.print(a);
    Lib.print("\n");
    let cnt = 0;
    while (cnt < Lib.length(a) - Lib.length(b)) {
        Lib.print(" ");
        cnt = cnt + 1;
    }
    Lib.print(b);
    Lib.print("\n");
}
