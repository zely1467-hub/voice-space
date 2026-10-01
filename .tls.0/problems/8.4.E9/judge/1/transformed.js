"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = Number(Lib.input()); 
    let b = Number(Lib.input()); 

    Lib.print("---\n");

    let y = 0; 
    while (y < b) {
        let x = 0; 
        while (x < a) {
            if ((x + y) % 2 === 0) {
                Lib.print("O");
            } else {
                Lib.print("X");
            }
            x = x + 1;
        }
        Lib.print("\n"); 
        y = y + 1;
    }
}