"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let n = Number(Lib.input()); 

    Lib.print("---\n");

    let size = 1;
    let i = 0;
    while (i < n) {
        size = size * 3;
        i = i + 1;
    }

    let y = 0;
    while (y < size) {
        let x = 0;
        while (x < size) {
            let curX = x;
            let curY = y;
            let isSpace = false;

            while (curX > 0 || curY > 0) {
                if (curX % 3 === 1 && curY % 3 === 1) {
                    isSpace = true;
                    break;
                }
                curX = Math.floor(curX / 3);
                curY = Math.floor(curY / 3);
            }

            if (isSpace) {
                Lib.print(" "); 
            } else {
                Lib.print("X"); 
            }

            x = x + 1;
        }
        Lib.print("\n"); 
        y = y + 1;
    }
}