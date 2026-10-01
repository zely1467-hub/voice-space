"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let a = JSON.parse(Lib.input());

    Lib.print("---\n");

    Lib.print(a[2]);
    Lib.print("\n");
}