"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input CSV data: ");
    let a = Lib.input(); 

    Lib.print("---\n");

    let i = 0;
    while (i < a.length) {
        if (a[i] === ",") {
            Lib.print("\n");
        } else {
            Lib.print(a[i]);
        }
        i = i + 1;
    }

    Lib.print("\n"); 
}