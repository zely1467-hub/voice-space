"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let a = Number(Lib.input());   

    Lib.print("Input the number: ");
    let b = Number(Lib.input());   

    Lib.print("Input the number: ");
    let c = Number(Lib.input());   

    Lib.print("---\n");

    let numbers = [a, b, c];
    numbers.sort((x, y) => x - y);

    let message = numbers.join(" ");

    Lib.print(message);
    Lib.print("\n");
}