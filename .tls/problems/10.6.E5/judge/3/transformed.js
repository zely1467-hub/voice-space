"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = JSON.parse(Lib.input());
    let n = Number(Lib.input());

    Lib.print("---\n");

    let length = Lib.length(a);
    let found = false; 
    let i = 0;

    while (i < length) {
        if (a[i] === n) {
            found = true; 
        }
        i = i + 1;
    }

    Lib.print(found);
    Lib.print("\n");
}