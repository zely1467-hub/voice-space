"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cnt = 50;
    while (cnt >= 0) {
        cnt = cnt - 13;
    }
    Lib.print(cnt);
    Lib.print("\n");
}