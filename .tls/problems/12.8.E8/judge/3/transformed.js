"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let is_prime = (n) => {
        if (n < 2) {
            return false;
        }

        let i = 2;
        while (i < n) {
            if (n % i === 0) {
                return false; 
            }
            i = i + 1;
        }

        return true;
    };

    Lib.print(is_prime(1));       
    Lib.print(" ");
    Lib.print(is_prime(1) === false);
    Lib.print("\n");

    Lib.print(is_prime(2));       
    Lib.print(" ");
    Lib.print(is_prime(2) === true);
    Lib.print("\n");

    Lib.print(is_prime(7));      
    Lib.print(" ");
    Lib.print(is_prime(7) === true);
    Lib.print("\n");

    Lib.print(is_prime(9));      
    Lib.print(" ");
    Lib.print(is_prime(9) === false);
    Lib.print("\n");

    Lib.print(is_prime(13));     
    Lib.print(" ");
    Lib.print(is_prime(13) === true);
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(is_prime(3)); Lib.print('\n'); }