"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let A = JSON.parse(Lib.input());

    Lib.print("---\n");

    let isWin = false; 

    let i = 0;
    while (i < 3) {
        if (A[i][0] === "O" && A[i][1] === "O" && A[i][2] === "O") {
            isWin = true;
        }
        i = i + 1;
    }

    let j = 0;
    while (j < 3) {
        if (A[0][j] === "O" && A[1][j] === "O" && A[2][j] === "O") {
            isWin = true;
        }
        j = j + 1;
    }

    if (A[0][0] === "O" && A[1][1] === "O" && A[2][2] === "O") {
        isWin = true;
    }
    if (A[0][2] === "O" && A[1][1] === "O" && A[2][0] === "O") {
        isWin = true;
    }

    Lib.print(isWin);
    Lib.print("\n");
}