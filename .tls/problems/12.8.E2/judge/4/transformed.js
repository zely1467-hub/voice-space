"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let max = (a, b) => {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    };

    Lib.print(max(3, 8));       
    Lib.print(" ");
    Lib.print(max(3, 8) === 8);
    Lib.print("\n");

    Lib.print(max(10, 2));      
    Lib.print(" ");
    Lib.print(max(10, 2) === 10);
    Lib.print("\n");

    Lib.print(max(5, 5));        
    Lib.print(" ");
    Lib.print(max(5, 5) === 5);
    Lib.print("\n");

    Lib.print(max(-3, -7));      
    Lib.print(" ");
    Lib.print(max(-3, -7) === -3);
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(max(13, 19)); Lib.print('\n'); }