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
            let c = "O";
            if (1 < s && s < b && 0 < cnt && cnt < a - 1) {
                c = "X";
            }
            Lib.print(c);
            cnt = cnt + 1;
        }
        Lib.print("\n");
        s = s + 1;
    }
}
