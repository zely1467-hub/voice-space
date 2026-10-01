"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");

    let cnt = a;

    while (cnt >= 1) {
        if (cnt % 3 === 1) {
            Lib.print(cnt);
            Lib.print("\n");
        }
        cnt = cnt - 1; 
    }
}