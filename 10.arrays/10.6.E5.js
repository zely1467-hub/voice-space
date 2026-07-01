"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("長さが1以上の正の整数の配列リテラルを入力: ");
    let a = JSON.parse(Lib.input());
    Lib.print("input the number: ");
    let n = Number(Lib.input());
    Lib.print("---\n");
    Lib.print(a[n] === n);
    Lib.print("\n");
}