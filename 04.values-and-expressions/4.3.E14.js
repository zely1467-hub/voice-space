"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input text: ");
    let a = Lib.input(); // 文字列を入力

    Lib.print("---\n");

    let isValid = true; // 学籍番号形式かどうかを保持するフラグ

    // 1. 長さが 8 であるかチェック
    if (a.length !== 8) {
        isValid = false;
    } else {
        // 2. 最初の2文字が "TK" であるかチェック
        if (a[0] !== "T" || a[1] !== "K") {
            isValid = false;
        }

        // 3. 3文字目（インデックス2）から最後までの6文字が数字かチェック
        let i = 2;
        while (i < 8) {
            if (a[i] < "0" || a[i] > "9") {
                isValid = false; // 数字でない文字が含まれていたら false
            }
            i = i + 1;
        }
    }

    // 判定結果（true または false）を出力
    Lib.print(isValid);
    Lib.print("\n");
}