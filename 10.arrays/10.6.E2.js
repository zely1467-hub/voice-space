"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("長さが5以上の正の整数の配列リテラルを入力: ");
    let a = JSON.parse(Lib.input());
    let length = Lib.length(a);
    Lib.print("---\n");

    Lib.print(a[length - 1]); 
    Lib.print("\n");
}