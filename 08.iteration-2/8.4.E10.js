"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let count = 0; 

    while (true) {
        let x = Number(Lib.input());
        if (x === 0) {
            break; 
        }

        if (x % 2 === 1) {
            count = count + 1;
        }
    }

    Lib.print("---\n");
    Lib.print(count);
    Lib.print("\n");
}