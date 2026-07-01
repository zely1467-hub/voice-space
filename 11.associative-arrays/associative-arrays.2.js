"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 連想配列の要素への値の割り当て文の例
{
    let a = {"name": "apple", "price": 180, "description": "Sweet!"};
    Lib.print("a: ");
    Lib.print(a); // 連想配列 a の印字
    Lib.print(".\n");

    a["name"] = "coffee";   // 連想配列 a の"name"要素の値を "coffee" に更新する．
    Lib.print("a[\"coffee\"] updated.\n");
    Lib.print(a); // 連想配列 a の印字
    Lib.print(".\n");

    a["price"] = 900;   // 連想配列 a の"price"要素の値を 900 に更新する．
    Lib.print("a[\"price\"] updated.\n");
    Lib.print(a); // 連想配列 a の印字
    Lib.print(".\n");

    // 連想配列 a にキー"from"（産地）を新しく追加して，それに値 "Colombia" を割り当てる．
    a["from"] = "Colombia";
    Lib.print("a[\"from\"] added.\n");
    Lib.print(a); // 連想配列 a の印字
    Lib.print(".\n");
}