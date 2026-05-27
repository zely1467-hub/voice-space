"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the odd number string: ");
    let a = Lib.input();
    Lib.print("---\n");
    
    let length = Lib.length(a);
    let centerIndex = Math.floor(length / 2);
    Lib.print(Lib.charAt(a, centerIndex));
    Lib.print("\n");
}