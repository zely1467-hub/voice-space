"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input());
    let k = 1;   
    Lib.print("---\n");
    while (k <= n) {   
        let a = k;           
        let cnt = 1;         
        while (cnt <= a) {   
            Lib.print(k);  
            cnt = cnt + 1;   
        }
        Lib.print("\n");
        k = k + 1;     
    }
}