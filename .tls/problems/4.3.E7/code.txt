"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the 7 numeric characters: ");
    let a = Lib.input();
    Lib.print("---\n");
    Lib.print(Lib.slice(a, 3, 7));
    Lib.print("\n");     

}