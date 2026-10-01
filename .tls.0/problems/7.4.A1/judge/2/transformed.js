"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input text: ");
    let a = Lib.input(); 

    Lib.print("---\n");

    let count = 0; 
    let i = 0;     

    while (i < a.length) {
        let ch = a[i]; 

        if (ch >= "A" && ch <= "Z") {
            count = count + 1;
        }

        i = i + 1; 
    }

    Lib.print(count);
    Lib.print("\n");
}