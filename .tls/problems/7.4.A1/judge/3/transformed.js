"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let cnt = 0;
    let num = 0;
    while (cnt < Lib.length(a)) {
        let ch = Lib.charAt(a, cnt);
        if ("A" <= ch && ch <= "Z") {
            num = num + 1;
        }
        cnt = cnt + 1;
    }
    Lib.print(num);
    Lib.print("\n");
}
