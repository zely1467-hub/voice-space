"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 連想配列のキーを削除する例
{
    let a = {"name": "apple", "price": 180, "description": "Sweet!"};
    Lib.print("a: ");
    Lib.print(a); // 連想配列 a の印字
    Lib.print(".\n");

    // 連想配列 a からキー "description" を削除する．
    delete a["description"];

    Lib.print("a: ");
    Lib.print(a); // 連想配列 a の印字
    Lib.print(".\n");
}