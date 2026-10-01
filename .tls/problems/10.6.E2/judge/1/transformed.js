"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = JSON.parse(Lib.input());

    Lib.print("---\n");

    let length = Lib.length(a);
    Lib.print(a[length - 1]);
    Lib.print("\n");
}