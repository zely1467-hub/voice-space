"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cnt = 11;
    while (cnt < 50) {
        cnt = cnt + 13;
    }
    Lib.print(cnt);
    Lib.print("\n");
}