"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = Number(Lib.input()); 

    Lib.print("---\n");

    let k = 1; 
    while (k <= a) {
        let cnt = 1; 
        while (cnt <= k) {
            if (cnt === 1) {
                Lib.print(k);       
            } else {
                Lib.print("," + k); 
            }
            cnt = cnt + 1;
        }
        Lib.print("\n"); 
        k = k + 1;
    }
}