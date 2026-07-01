"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the price: ");
    let a = Number(Lib.input());   // 単価 a を数値として読み取る
    Lib.print("Input the number: ");
    let m = Number(Lib.input());   // 購入個数 m を数値として読み取る
    Lib.print("---\n");
    Lib.print( a * m );
    Lib.print("\n");
}