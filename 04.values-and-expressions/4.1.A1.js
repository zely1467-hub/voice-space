"use strict";

const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the number Alice studied: "); 
    /*Alice studied programming for ? minutes. */

    let a = Number(Lib.input());

    Lib.print("---\n");
    /* Alice の勉強時間を h 時間 m 分 s 秒と表すとき， 
    h と m と sをこの順で各行に印字 */
    Lib.print((a - (a % 3600)) / 3600);  
    Lib.print("\n");
    Lib.print(Math.floor((a % 3600) / 60));  /* 600 input 10, 10000 input 46, 3600 input 0 */
    Lib.print("\n");
    Lib.print(a % 60);
    Lib.print("\n");

    /* Lib.print((a - (a % 60)) / 60)    
    Lib.print("\n");
    Lib.print(a % 60)
    Lib.print("\n"); */

}