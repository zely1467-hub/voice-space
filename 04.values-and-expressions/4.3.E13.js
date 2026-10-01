"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input your phone number : ");
    let a = Lib.input();
    
    let length = Lib.length(a);

    Lib.print("---\n");
    Lib.print(Lib.slice(a, 0, 3));
    Lib.print(Lib.slice(a, 4, 8));
    Lib.print(Lib.slice(a, 9, 13));
    Lib.print("\n");
} 