"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input());
    let size = 1;
    let cnt = 1;
    while (cnt <= n) {
        size = size * 3;
        cnt = cnt + 1;
    }

    Lib.print("---\n");
    let row = 0;
    while (row < size) {
        let col = 0;
        while (col < size) {
            let r = row;
            let c = col;
            let is_space = false;
            while (r > 0 || c > 0) {
                if (r % 3 === 1 && c % 3 === 1) {
                    is_space = true;
                }
                r = Math.floor(r / 3);
                c = Math.floor(c / 3);
            }
            if (is_space) {
                Lib.print(" ");
            }
            else {
                Lib.print("X");
            }
            col = col + 1;
        }
        Lib.print("\n");
        row = row + 1;
    }
}
