"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input text: ");
    let a = Lib.input(); // 文字列を入力

    Lib.print("---\n");

    let openIndex = -1;  // '(' の位置を保持する変数
    let closeIndex = -1; // ')' の位置を保持する変数

    let i = 0;
    while (i < a.length) {
        if (a[i] === "(") {
            openIndex = i;
        }
        if (a[i] === ")") {
            closeIndex = i;
        }
        i = i + 1;
    }

    // 1. '(' のインデックスを出力して改行
    Lib.print(openIndex);
    Lib.print("\n");

    // 2. ')' のインデックスを出力して改行
    Lib.print(closeIndex);
    Lib.print("\n");
}