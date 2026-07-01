"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the first name: ");
    let first_name = Lib.input();   // 名を読み取る
    Lib.print("Input the last name: ");
    let last_name = Lib.input();   // 姓を読み取る
    Lib.print("---\n");

    Lib.print("Hello, ");
    Lib.print(last_name);
    Lib.print(" sensei.");
    Lib.print("\n")

    Lib.print("Can I call you ");
    Lib.print(first_name);
    Lib.print("?");
    Lib.print("\n");
}