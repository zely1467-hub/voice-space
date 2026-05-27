"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
/* 結合演算の例 */
{
    Lib.print("Input the word: ");
    let a = Lib.input();

    Lib.print("Input the word: ");
    let b = Lib.input();

    Lib.print("---");
    Lib.print("\n");

    Lib.print(a + b);
    Lib.print("\n");
}