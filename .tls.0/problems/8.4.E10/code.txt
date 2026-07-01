"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let num = 0;
    let n = Number(Lib.input());
    while (n !== 0) { // n が入力終了を意味する 0 と等しくない間は繰り返す．
        if (n % 2 === 1) {
            num = num + 1;
        }
        n = Number(Lib.input());
    }
    Lib.print("---\n");
    Lib.print(num);
    Lib.print("\n");
}
