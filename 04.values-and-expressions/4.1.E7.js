"use strict";

const { isBigInt64Array } = require("util/types");

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number over 100: "); 
    /*Alice studied programming for ? minutes. */

    let a = Number(Lib.input());

    Lib.print("---\n");
    /* Alice の勉強時間を h 時間 m 分と表すとき， 
    h と m をこの順で各行に印字 */
    Lib.print((a - (a % 60)) / 60)    
    Lib.print("\n");
    Lib.print(a % 60)
    Lib.print("\n");
}