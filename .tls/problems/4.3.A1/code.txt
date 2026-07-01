"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let a = Lib.input();
    Lib.print("---\n");
    let atIdx = Lib.indexOf(a, "@", 0);
    let afterAt = Lib.slice(a, atIdx + 1, Lib.length(a));
    Lib.print(atIdx > 0 && Lib.indexOf(afterAt, "@", 0) === -1 && Lib.indexOf(afterAt, ".", 0) !== -1);
    Lib.print("\n");
}
