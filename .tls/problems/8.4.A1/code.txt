"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input());
    let width = 2 * n - 1;

    Lib.print("---\n");
    let row = 1;
    while (row <= width) {
        let distance;
        if (row <= n) {
            distance = n - row;
        }
        else {
            distance = row - n;
        }

        let left = distance + 1;
        let right = width - distance;
        let col = 1;
        while (col <= width) {
            if (col === left || col === right) {
                Lib.print("O");
            }
            else {
                Lib.print("+");
            }
            col = col + 1;
        }
        Lib.print("\n");
        row = row + 1;
    }
}
