"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("長さが1以上の正の整数の配列リテラルを入力: ");
    let a = JSON.parse(Lib.input());
    let length = Lib.length(a);
    Lib.print("---\n");

    let i = 0; 
    while (i < length) {
        Lib.print(Math.pow(a[i],2));   
        Lib.print("\n");
        i = i + 1;
    }
}