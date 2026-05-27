"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = 1;
    Lib.print(a);
    Lib.print("\n");

    // ここから同じ3行の3回の繰り返し

    a = a + 2;
    Lib.print(a);
    Lib.print("\n");

    a = a + 2;
    Lib.print(a);
    Lib.print("\n");

    a = a + 2;
    Lib.print(a);
    Lib.print("\n");
}