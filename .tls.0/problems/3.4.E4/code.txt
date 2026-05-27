"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("[1] Input the name: ");
    let x = Lib.input();
    Lib.print("[1] Input the price: ");
    let a = Number(Lib.input());
    Lib.print("[1] Input the number: ");
    let m = Number(Lib.input());
    Lib.print("[2] Input the name: ");
    let y = Lib.input();
    Lib.print("[2] Input the price: ");
    let b = Number(Lib.input());
    Lib.print("[2] Input the number: ");
    let n = Number(Lib.input());
    Lib.print("---\n");

    let p = a * m;
    let q = b * n;
    let t = p + q;

    Lib.print(x + ": " + p + " yen\n");
    Lib.print(y + ": " + q + " yen\n");
    Lib.print("===\n");
    Lib.print("Total: " + t + " yen\n");

    Lib.print("\n");
}