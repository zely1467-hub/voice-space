"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let n = Number(Lib.input()); 

    let max_sum = -1; 
    let best_day = 1; 

    let day = 1; 
    while (day <= n) {
        let line = Lib.input(); 
        let line_len = line.length;

        let day_sum = 0; 
        let i = 0;       
        let cnt = 1;     
        while (cnt <= 24) {
            let j = line.indexOf(",", i);
            if (j === -1) {
                j = line_len;
            }

            let temp = Number(line.slice(i, j));
            day_sum = day_sum + temp;

            i = j + 1;
            cnt = cnt + 1;
        }

        if (day_sum > max_sum) {
            max_sum = day_sum;
            best_day = day;
        }

        day = day + 1;
    }

    Lib.print("---\n");
    Lib.print(best_day);
    Lib.print("\n");
}