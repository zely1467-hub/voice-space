"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let price_apple = 180; 
    let price_orange = 120;   
    let price_banana = 150;   

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