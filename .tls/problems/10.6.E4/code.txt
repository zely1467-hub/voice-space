"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = JSON.parse(Lib.input());

    Lib.print("---\n");

    let length = Lib.length(a);
    
    let max = a[0];
    let i = 1;

    while (i < length) {
        if (a[i] > max) {
            max = a[i]; 
        }
        i = i + 1;
    }

    Lib.print(max);
    Lib.print("\n");
}