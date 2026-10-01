"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Alice: ");
    Lib.print(180 * 3 + 120 * 2);
    Lib.print(" yen\n");

    Lib.print("Bob: ");
    Lib.print(120 + 150 * 3);
    Lib.print(" yen\n");

    Lib.print("Carol: ");
    Lib.print(180 * 5 + 120 * 4 + 150 * 3);
    Lib.print(" yen\n");
}