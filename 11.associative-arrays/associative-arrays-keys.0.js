"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 連想配列のキーを配列として取得する例
{
    let a = {"name": "apple", "price": 180, "description": "Sweet!"};
    Lib.print("a: ");
    Lib.print(a); // 連想配列 a の印字
    Lib.print(".\n");

    let keys = Object.keys(a); // 連想配列 a のキーを配列として取得する．
    Lib.print("keys: ");
    Lib.print(keys);
    Lib.print("\n");

    let len_keys = Lib.length(keys);
    let i = 0;
    while (i < len_keys) {
        let key = keys[i];  // i 番目のキー
        let value = a[key]; // i 番目のキーに割り当てられた値
        Lib.print("a[\"");
        Lib.print(key);
        Lib.print("\"]: ");
        Lib.print(value);
        Lib.print("\n");
        i = i + 1;
    }
}