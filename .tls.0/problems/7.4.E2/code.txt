"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("---\n");

    // カウントを 2 * a（一番大きい数）からスタートさせる
    let cnt = 2 * a;

    // a 以上である間は繰り返す
    while (cnt >= a) {
        Lib.print(cnt);
        Lib.print("\n");
        cnt = cnt - 1; // 1ずつ減らす
    }
}