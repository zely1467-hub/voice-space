"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let print_stars = (n) => {
        let i = 0;
        while (i < n) {
            Lib.print("*");
            i = i + 1;
        }
    };

    Lib.print("3個: ");
    print_stars(3);
    Lib.print("\n");

    Lib.print("5個: ");
    print_stars(5);
    Lib.print("\n");

    Lib.print("1個: ");
    print_stars(1);
    Lib.print("\n");

    Lib.print("0個: ");
    print_stars(0); 
    Lib.print("\n");
 Lib.print('--- Verification by the evaluation system\n'); print_stars(10); Lib.print('\n'); }