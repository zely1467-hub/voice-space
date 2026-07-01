'use strict';
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    let b = Number(Lib.input());
    Lib.print("---\n");
    let s = 1;
    while (s <= b) {
        let cnt = 0;
        while (cnt < a) {
            Lib.print("O");
            cnt = cnt + 1;
        }
        Lib.print("\n");
        s = s + 1;
    }
}
