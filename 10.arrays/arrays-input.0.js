"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 最初に整数nを入力します．
// その後n個の整数を入力して，それを配列に蓄積します． 
{
    let n = Number(Lib.input());
    let a = []; // 入力される整数を保持する配列

    let cnt = 0; // カウンタ: 0 → 1 → 2 → … → n-1 （n回の反復）
    while (cnt < n) {

        // 入力された整数を読み込んで，配列aにpushする．
        let m = Number(Lib.input());
        Lib.push(a, m);

        cnt = cnt + 1; // カウンタ cnt の更新文
    }
    // この時点で入力されたn個の整数が配列aに順に格納されている．

    Lib.print(a);
    Lib.print("\n");
}