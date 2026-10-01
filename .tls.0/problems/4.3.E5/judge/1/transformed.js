"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the word: ");
    let a = Lib.input();
    Lib.print("---\n");

    let length = Lib.length(a);
    let the_first = Lib.charAt(a, 0);
    let the_last = Lib.charAt(a, length - 1);
    Lib.print(the_first);
    Lib.print("\n");
    Lib.print(the_last);
    Lib.print("\n");

}