"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input text: ");
    let a = Lib.input(); 

    Lib.print("---\n");

    let i = a.length - 1;

    while (i >= 0) {
        Lib.print(a[i]); 
        i = i - 1;       
    }

    Lib.print("\n"); 
}