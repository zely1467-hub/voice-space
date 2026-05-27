"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let price_apple = 210; 
    let price_orange = 100;   
    let price_banana = 180;   

    Lib.print("Alice: ");
    Lib.print(price_apple * 3 + price_orange * 2); 
    Lib.print(" yen\n");

    Lib.print("Bob: ");
    Lib.print(price_orange + price_banana * 3);   
    Lib.print(" yen\n");

    Lib.print("Carol: ");
    Lib.print(price_apple * 5 + price_orange * 4 + price_banana * 3); 
    Lib.print(" yen\n");
}