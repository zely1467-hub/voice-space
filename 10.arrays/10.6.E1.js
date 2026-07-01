"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("長さが5以上の正の整数の配列リテラルを入力: ");
    let a = JSON.parse(Lib.input());
    Lib.print("---\n");

    Lib.print(a[2]);
    Lib.print("\n");
}