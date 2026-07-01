"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input());
    Lib.print("---\n");
    let ch = (k, i, j) => {
        if (k === 0) {
            return "X";
        }
        let unit = Math.pow(3, k - 1);
        let i_in_middle = (unit <= i && i < 2 * unit);
        let j_in_middle = (unit <= j && j < 2 * unit);
        if (i_in_middle && j_in_middle) {
            return " ";
        }
        else {
            return ch(k - 1, i % unit, j % unit);
        }
    };
    let i = 0;
    let m = Math.pow(3, n);
    while (i < m) {
        let j = 0;
        while (j < m) {
            Lib.print(ch(n, i, j));
            j = j + 1;
        }
        Lib.print("\n");
        i = i + 1;
    }
}
