"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = 0;
    let sum = 0;
    Lib.print(sum);
    Lib.print("\n");

    // ここから同じ4行の4回の繰り返し

    a = a + 1;
    sum = sum + a;
    Lib.print(sum);
    Lib.print("\n");

    a = a + 1;
    sum = sum + a;
    Lib.print(sum);
    Lib.print("\n");

    a = a + 1;
    sum = sum + a;
    Lib.print(sum);
    Lib.print("\n");

    a = a + 1;
    sum = sum + a;
    Lib.print(sum);
    Lib.print("\n");
}