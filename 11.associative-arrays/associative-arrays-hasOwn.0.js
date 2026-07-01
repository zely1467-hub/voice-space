"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 連想配列が指定したキーを持つかを判定する例
{
    let a = {"name": "apple", "price": 180, "description": "Sweet!"};
    Lib.print("a: ");
    Lib.print(a); // 連想配列 a の印字
    Lib.print(".\n");

    // "name"がaのキーであるならtrue, そうでなければ false.
    let has_key_name = Object.hasOwn(a, "name");
    Lib.print("Is \"name\" a key of a?: ");
    Lib.print(has_key_name);
    Lib.print("\n");

    // "type"がaのキーであるならtrue, そうでなければ false.
    let has_key_type = Object.hasOwn(a, "type");
    Lib.print("Is \"type\" a key of a?: ");
    Lib.print(has_key_type);
    Lib.print("\n");
}