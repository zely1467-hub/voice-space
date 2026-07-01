"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let comma1 = Lib.indexOf(a, ",", 0);
    let comma2 = Lib.indexOf(a, ",", comma1 + 1);
    Lib.print(Lib.slice(a, 0, comma1));
    Lib.print("\n");
    Lib.print(Lib.slice(a, comma1 + 1, comma2));
    Lib.print("\n");
    Lib.print(Lib.slice(a, comma2 + 1, Lib.length(a)));
    Lib.print("\n");
}
