"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");

    let cnt1 = 1;
    while (cnt1 <= a) {
        Lib.print(cnt1);
        Lib.print("\n");
        cnt1 = cnt1 + 1;
    }

    let cnt2 = a - 1;
    while (cnt2 >= 1) {
        Lib.print(cnt2);
        Lib.print("\n");
        cnt2 = cnt2 - 1;
    }
}