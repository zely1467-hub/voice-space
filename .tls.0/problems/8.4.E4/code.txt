'use strict';
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Number(Lib.input());
    Lib.print("---\n");
    let b = 1;
    while (b <= a) {
        let k = b;
        let cnt = 0;
        while (cnt < k) {
            if (cnt > 0) {
                Lib.print(",");
            }
            Lib.print(k);
            cnt = cnt + 1;
        }
        Lib.print("\n");
        b = b + 1;
    }
}
