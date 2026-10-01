"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Lib.input(); 

    Lib.print("---\n");

    let i = 0;
    while (i < a.length) {
        let remaining = a.length - i;

        if (i > 0 && remaining % 3 === 0) {
            Lib.print(",");
        }

        Lib.print(a[i]);
        i = i + 1;
    }

    Lib.print("\n"); 
}