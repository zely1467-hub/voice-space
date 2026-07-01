"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let k = Number(Lib.input());          
    let cnt = 1;  
    Lib.print("---\n"); 
        Lib.print(k);  
    while (cnt < k) {
        Lib.print("," + k);
        cnt = cnt + 1;
    }
    Lib.print("\n");
}