"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the even number string: ");
    let a = Lib.input();
    Lib.print("---\n");

    let totalLength = Lib.length(a);
    let halfLength = totalLength / 2;
    let firstHalf = Lib.slice(a, 0, halfLength);
    let secondHalf = Lib.slice(a, halfLength, totalLength);

    Lib.print(firstHalf === secondHalf);
    Lib.print("\n");
}