"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let is_even = (n) => {
        return n % 2 === 0;
    };

    Lib.print(is_even(4));      
    Lib.print(" ");
    Lib.print(is_even(4) === true);
    Lib.print("\n");

    Lib.print(is_even(7));       
    Lib.print(" ");
    Lib.print(is_even(7) === false);
    Lib.print("\n");

    Lib.print(is_even(0));      
    Lib.print(" ");
    Lib.print(is_even(0) === true);
    Lib.print("\n");

    Lib.print(is_even(-2));      
    Lib.print(" ");
    Lib.print(is_even(-2) === true);
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(is_even(7)); Lib.print('\n'); }