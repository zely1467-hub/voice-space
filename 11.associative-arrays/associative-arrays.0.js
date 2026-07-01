"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 連想配列リテラルと要素参照式の例
{
    let a = {"name": "apple", "price": 180, "description": "Sweet!"};
    Lib.print("a is the associative array ");
    Lib.print(a); // 連想配列 a の印字（Lib.printが適当に印字してくれます）
    Lib.print(".\n");

    Lib.print("a[\"name\"]: ");
    Lib.print(a["name"]);         // 連想配列 a の "name" 要素
    Lib.print("\n");

    Lib.print("a[\"price\"]: ");
    Lib.print(a["price"]);        // 連想配列 a の "price" 要素
    Lib.print("\n");

    Lib.print("a[\"description\"]: ");
    Lib.print(a["description"]);  // 連想配列 a の "description" 要素
    Lib.print("\n");
}