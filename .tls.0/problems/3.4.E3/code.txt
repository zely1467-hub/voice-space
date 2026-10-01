"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the price of an apple: ");
    let price_apple = Number(Lib.input());   // りんごの単価を数値として読み取る
    Lib.print("Input the number of apples: ");
    let number_apples = Number(Lib.input());   // りんごの購入個数を数値として読み取る
    Lib.print("Input the price of a peach: ");
    let price_peach = Number(Lib.input());   // 桃の単価を数値として読み取る
    Lib.print("Input the number of peaches: ");
    let number_peaches = Number(Lib.input());   // 桃の購入個数を数値として読み取る
    Lib.print("---\n");
    Lib.print( ((price_apple * number_apples) + (price_peach * number_peaches)) * 1.1 );
    Lib.print("\n");
}