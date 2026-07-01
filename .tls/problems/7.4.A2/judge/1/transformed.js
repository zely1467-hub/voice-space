"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let cnt = Lib.length(a) - 1;
    let s = "";
    while (cnt >= 0) {
        s = s + Lib.charAt(a, cnt);
        cnt = cnt - 1;
    }
    Lib.print(s);
    Lib.print("\n");
}
