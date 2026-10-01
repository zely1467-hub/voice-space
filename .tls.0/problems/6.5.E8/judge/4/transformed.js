"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the number: ");
    let d = Number(Lib.input());   

    Lib.print("---\n");

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date(2026, 4, d);

    let message = days[date.getDay()];

    Lib.print(message);
    Lib.print("\n");
}