"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input Your Name: ");
    let name = Lib.input();   // キーボードから文字列を読み取り，それに name という名前を付ける
    Lib.print("Hello, ");
    Lib.print(name);          // 名前 name に割り当てられた文字列を印字する
    Lib.print("!\n");
}