"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number of a: ");
    let a = Number(Lib.input());
    Lib.print("Input the number of b: ");
    let b = Number(Lib.input());

    Lib.print("---\n");
    /* どちらか一方がもう一方の2乗と等しければ true を， 
    そうでなければ false を印字 */
    Lib.print( a === b * b || a * a === b );
    Lib.print("\n");
}