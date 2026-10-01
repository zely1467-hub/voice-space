"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let A = JSON.parse(Lib.input());

    Lib.print("---\n");

    let sum_math = 0;
    let i = 0;
    let len = Lib.length(A);

    while (i < len) {
        let student = A[i];
        sum_math = sum_math + student.math; 
        i = i + 1;
    }

    let average_math = sum_math / len;
    Lib.print(average_math);
    Lib.print("\n");
}