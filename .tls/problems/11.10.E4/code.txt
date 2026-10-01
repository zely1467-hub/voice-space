"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let A = JSON.parse(Lib.input());

    Lib.print("---\n");

    let max_sum = -1;       
    let top_students = [];  

    let i = 0;
    let len = Lib.length(A);
    while (i < len) {
        let student = A[i];
        
        let sum = student["japanese"] + student["math"] + student["english"];

        if (sum > max_sum) {
            max_sum = sum;
            top_students = [student["student_id"]]; 
        } else if (sum === max_sum) {
            Lib.push(top_students, student["student_id"]); 
        }

        i = i + 1;
    }

    let j = 0;
    let len_top = Lib.length(top_students);
    while (j < len_top) {
        Lib.print(top_students[j]);
        Lib.print("\n");
        j = j + 1;
    }
}