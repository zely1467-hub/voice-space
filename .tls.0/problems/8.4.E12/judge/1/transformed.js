"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let n = Number(Lib.input()); // 入力データの個数
    let data_line = Lib.input();   // n 個の整数が空白区切りで並んだ文字列
    let length_data_line = Lib.length(data_line);
    let min = 1000;
    let i = 0;   // 文字列 data_line の中で次に空白を探し始めるindex
    let cnt = 1; // カウンタ (1 → 2 → … → n)
    while (cnt <= n) {   // 変数 cnt の値が n 以下である間は繰り返す．
        // i 文字目以降に初めて現れるカンマのindexをjとする
        // (ただしカンマが見つからなければ文字列 data_line の長さをjとする)
        let j = Lib.indexOf(data_line, ",", i);
        if (j === -1) {
            j = length_data_line;
        }
        // cnt 番目の整数が書かれた部分文字列を取得する．
        let k_string = Lib.slice(data_line, i, j);
        let k = Number(k_string);   // cnt 番目の整数
        if (k < min) {
            min = k;
        }
        i = j + 1;  // iの値をj+1 (次に空白を探し始めるindex) に更新する．
        cnt = cnt + 1;   // 変数 cnt の値を1増やす．
    }
    Lib.print("---\n");
    Lib.print(min);
    Lib.print("\n");
}
