"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    // TAIYAKI SHOP
    // Choose "Tsubuan", "Koshian" or "Castard"
    let a = Lib.input();
    if (a === "Tsubuan") {
        Lib.print("150 yen\n");
    }
    else if (a === "Koshian") {
        Lib.print("180 yen\n");
    }
    else if (a === "Castard") {
        Lib.print("200 yen\n");
    }
    else {
        Lib.print("Not on the menu.\n");
    }
}