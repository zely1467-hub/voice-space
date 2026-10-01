"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = JSON.parse(Lib.input());

    Lib.print("---\n");

    let length = Lib.length(a);
    let isSorted = true; 
    let i = 0;

    while (i < length - 1) {
        if (a[i] > a[i + 1]) {
            isSorted = false;
        }
        i = i + 1;
    }

    Lib.print(isSorted);
    Lib.print("\n");
}