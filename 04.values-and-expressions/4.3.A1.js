"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input email: ");
    let a = Lib.input(); 

    Lib.print("---\n");

    let atCount = 0; 
    let atIndex = -1; 

    let i = 0;
    while (i < a.length) {
        if (a[i] === "@") {
            atCount = atCount + 1;
            atIndex = i;
        }
        i = i + 1;
    }

    let isValid = true;

    if (atCount !== 1 || atIndex === 0) {
        isValid = false;
    } else {
        let periodCount = 0;
        let j = atIndex + 1; 

        while (j < a.length) {
            if (a[j] === ".") {
                periodCount = periodCount + 1;
            }
            j = j + 1;
        }

        if (periodCount < 1) {
            isValid = false; 
        }
    }

    Lib.print(isValid);
    Lib.print("\n");
}