"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = [];

    while (true) {
        let n = Number(Lib.input());
        if (n === 0) {
            break; 
        }
        Lib.push(a, n);
    }

    Lib.print("---\n");

    let i = Lib.length(a) - 1;
    while (i >= 0) {
        Lib.print(a[i]);
        Lib.print("\n");
        i = i - 1; 
    }
}