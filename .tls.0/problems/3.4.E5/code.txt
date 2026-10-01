"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number: ");
    let a = Number (Lib.input());

    Lib.print("---");
    Lib.print("\n");

    Lib.print(a);
    Lib.print("\n")

    Lib.print(a * a );
    Lib.print("\n");

    Lib.print(a * a * a);
    Lib.print("\n");

    Lib.print("\n");
}