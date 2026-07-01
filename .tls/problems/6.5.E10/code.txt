"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    let b = Lib.input();
    Lib.print("---\n");
    if (a === "N") {
        if (b === "N") {
            Lib.print("Newdays\n");
        } else {
            Lib.print("Saizeriya\n");
        }
    } else {
        if (b === "N") {
            Lib.print("Saizeriya\n");
        } else {
            Lib.print("Disney\n");
        }
    }
}
