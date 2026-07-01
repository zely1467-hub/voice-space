"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("input the price of apple: ");
    let a = Number(Lib.input());   // りんごの単価
    Lib.print("Input the numper of apples: ");
    let m = Number(Lib.input());   // りんごの購入個数
    Lib.print("Input the price of peach: ");
    let b = Number(Lib.input());   // 桃の単価
    Lib.print("Input the number of peaches: ");
    let n = Number(Lib.input());   // 桃の購入個数
    
    Lib.print("---\n");
    Lib.print( 5000 - (a * m + b * n ));
    Lib.print("\n");
}