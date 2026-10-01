"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let n = Number(Lib.input()); 

    Lib.print("---\n");

    let line = 1;
    let total_lines = 2 * n - 1; 

    while (line <= total_lines) {
        let d;
        if (line < n) {
            d = n - line;
        } else {
            d = line - n;
        }

        let left_o = d;                  
        let right_o = (2 * n - 2) - d;   

        let x = 0;
        let width = 2 * n - 1; 
        while (x < width) {
            if (x === left_o || x === right_o) {
                Lib.print("O");
            } else {
                Lib.print("+");
            }
            x = x + 1;
        }

        Lib.print("\n"); 
        line = line + 1;
    }
}