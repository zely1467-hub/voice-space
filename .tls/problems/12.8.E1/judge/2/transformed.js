"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let cost = (price, number) => {
        let total = price * number;
        return total;
    };

    Lib.print(cost(160, 4));   
    Lib.print(" ");
    Lib.print(cost(160, 4) === 640);
    Lib.print("\n");
    
    Lib.print(cost(180, 6));   
    Lib.print(" ");
    Lib.print(cost(180, 6) === 1080);
    Lib.print("\n");

    Lib.print(cost(100, 10));  
    Lib.print(" ");
    Lib.print(cost(100, 10) === 1000);
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); Lib.print(cost(130, 5)); Lib.print('\n'); }