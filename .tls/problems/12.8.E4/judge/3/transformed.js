"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let mean = (ns) => {
        let sum = 0;
        let length = Lib.length(ns);
        let i = 0;

        while (i < length) {
            sum = sum + ns[i];
            i = i + 1;
        }

        return sum / length;
    };

    Lib.print(mean([1, 2, 3, 4, 5]));      
    Lib.print(" ");
    Lib.print(mean([1, 2, 3, 4, 5]) === 3);
    Lib.print("\n");

    Lib.print(mean([10, 20]));              
    Lib.print(" ");
    Lib.print(mean([10, 20]) === 15);
    Lib.print("\n");

    Lib.print(mean([7]));                   
    Lib.print(" ");
    Lib.print(mean([7]) === 7);
    Lib.print("\n");

    Lib.print(mean([1.5, 2.5, 5.0]));     
    Lib.print(" ");
    Lib.print(mean([1.5, 2.5, 5.0]) === 3);
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(mean([20, 22, 24, 26, 28, 30])); Lib.print('\n'); }