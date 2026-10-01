"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Input the string: ");
    let str = Lib.input();   

    Lib.print("---\n");

    let message;
    if (str === "USJ") {
        message = "Universal Studio Japan";
    } else if (str === "TDL") {
        message = "Tokyo Disney Land";
    } else if (str === "TDS") {
        message = "Tokyo Disney Sea";
    } else if (str === "TDM") {
        message = "Tokyo Doitsu Mura";
    } else {
        message = "UNKNOWN";
    }

    Lib.print(message);
    Lib.print("\n");
}