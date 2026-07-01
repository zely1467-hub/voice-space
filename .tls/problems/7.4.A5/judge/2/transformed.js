"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let cnt = 0;
    let s = "";
    while (cnt < Lib.length(a)) {
        if (Lib.charAt(a, cnt) !== "-") {
            s = s + Lib.charAt(a, cnt);
        }
        cnt = cnt + 1;
    }
    Lib.print(s);
    Lib.print("\n");
}
