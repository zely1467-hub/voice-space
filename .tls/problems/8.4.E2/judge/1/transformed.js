"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 反復文の入れ子の例
// 整数 n が入力される．
// 1 から n までの各 k について，k 行目に k 個の * を印字する．
{
    let n = Number(Lib.input());
    let k = 1;   // 何行目かを表すカウンタ (1 → 2 → … → n)
    Lib.print("---\n");
    while (k <= n) {   // n 行目まで繰り返す
        // 変数 a に数値を割り当てた上で，a 個の * を1行に印字する:
        let a = k;           // 印字したい文字数
        let cnt = 1;         // 何文字目かを表すカウンタ (1 → 2 → … → a)
        while (cnt <= a) {   // 変数 cnt の値がa以下である間は繰り返す．
            Lib.print(k);  // * を1文字印字する．
            cnt = cnt + 1;   // 変数 cnt の値を1増やす．
        }
        Lib.print("\n");
        k = k + 1;     // 変数 k の値を1増やす．
    }
}