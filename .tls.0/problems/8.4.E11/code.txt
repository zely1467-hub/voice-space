"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input()); // 入力データの個数
    let max = n;
    let cnt = 1; // カウンタ (1 → 2 → … → n)
    while (cnt <= n) {   // 変数 cnt の値が n 以下である間は繰り返す．
        let a = Number(Lib.input());
        if (a > max) {
            max = a;
        }
        cnt = cnt + 1;   // 変数 cnt の値を1増やす．
    }
    Lib.print("---\n");
    Lib.print(max);
    Lib.print("\n");
}
