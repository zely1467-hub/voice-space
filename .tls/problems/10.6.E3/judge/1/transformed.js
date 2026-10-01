"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = JSON.parse(Lib.input());

    Lib.print("---\n");

    let length = Lib.length(a);
    let i = 0;

    while (i < length) {
        let val = a[i];
        Lib.print(val * val);
        Lib.print("\n");
        i = i + 1;
    }
}