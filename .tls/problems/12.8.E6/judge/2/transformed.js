"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let scale = (ns, k) => {
        let result = [];
        let length = Lib.length(ns);
        let i = 0;

        while (i < length) {
            Lib.push(result, ns[i] * k);
            i = i + 1;
        }

        return result;
    };

    Lib.print(scale([1, 2, 3], 2));       
    Lib.print("\n");

    Lib.print(scale([10, -5, 0], 3));    
    Lib.print("\n");

    Lib.print(scale([1, 2, 3, 4], 0.5));    
    Lib.print("\n");

    Lib.print(scale([], 5));              
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(scale([3, 4, 5], 6)); Lib.print('\n'); }