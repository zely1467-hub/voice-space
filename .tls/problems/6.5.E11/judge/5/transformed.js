"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    if (a === "USJ") {
        Lib.print("Universal Studio Japan\n");
    } else if (a === "TDL") {
        Lib.print("Tokyo Disney Land\n");
    } else if (a === "TDS") {
        Lib.print("Tokyo Disney Sea\n");
    } else if (a === "TDM") {
        Lib.print("Tokyo Doitsu Mura\n");
    } else {
        Lib.print("UNKNOWN\n");
    }
}
