"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let cnt = 0;
    let s = "";
    while (cnt < Lib.length(a)) {
        if (cnt > 0 && (Lib.length(a) - cnt) % 3 === 0) {
            s = s + ",";
        }
        s = s + Lib.charAt(a, cnt);
        cnt = cnt + 1;
    }
    Lib.print(s);
    Lib.print("\n");
}
