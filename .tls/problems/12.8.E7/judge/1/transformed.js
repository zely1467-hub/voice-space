"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let index_of = (ns, k) => {
        let length = Lib.length(ns);
        let i = 0;

        while (i < length) {
            if (ns[i] === k) {
                return i; 
            }
            i = i + 1;
        }

        return -1; 
    };

    Lib.print(index_of([10, 20, 30, 40], 30));    
    Lib.print(" ");
    Lib.print(index_of([10, 20, 30, 40], 30) === 2);
    Lib.print("\n");

    Lib.print(index_of([5, 8, 2, 8, 1], 8));        
    Lib.print(" ");
    Lib.print(index_of([5, 8, 2, 8, 1], 8) === 1);
    Lib.print("\n");

    Lib.print(index_of([10, 20, 30], 99));          
    Lib.print(" ");
    Lib.print(index_of([10, 20, 30], 99) === -1);
    Lib.print("\n");

    Lib.print(index_of([7, 8, 9], 7));             
    Lib.print(" ");
    Lib.print(index_of([7, 8, 9], 7) === 0);
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(index_of([2, 3, 4], 3)); Lib.print('\n'); }