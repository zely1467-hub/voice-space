"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let n = Number(Lib.input()); 
    let line = Lib.input();      

    let min = 1001; 
    let i = 0;      
    let cnt = 1;    

    while (cnt <= n) {
        let j = line.indexOf(",", i);
        if (j === -1) {
            j = line.length; 
        }

        let num = Number(line.slice(i, j));

        if (num < min) {
            min = num;
        }

        i = j + 1;     
        cnt = cnt + 1;
    }

    Lib.print("---\n");
    Lib.print(min);
    Lib.print("\n");
}