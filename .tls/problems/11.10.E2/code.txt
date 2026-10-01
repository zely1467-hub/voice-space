"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let A = JSON.parse(Lib.input());

    Lib.print("---\n");

    let sum = A.japanese + A.math + A.english;

    Lib.print(sum);
    Lib.print("\n");
}