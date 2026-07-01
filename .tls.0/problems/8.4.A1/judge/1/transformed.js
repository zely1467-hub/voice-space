"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input());
    Lib.print("---\n");
    let diff = (x, y) => { if (x > y) { return x - y; } else { return y - x; } };
    let nn = 2 * n - 1;
    let i = 0;
    while (i < nn) {
        let j = 0;
        while (j < nn) {
            if (diff(n - 1, i) + diff(n - 1, j) === n - 1) {
                Lib.print("O");
            }
            else {
                Lib.print("+");
            }
            j = j + 1;
        }
        Lib.print("\n");
        i = i + 1;
    }
            
}
