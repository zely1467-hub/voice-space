"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let e = Lib.input();
    Lib.print("---\n");
    // state 0: (initial)
    //   "1" >> state 1
    //   "(" >> state 0 with level incremenet
    // state 1: (terminal)
    //   "+" >> state 0
    //   ")" >> state 1 with level decrement
    let n = Lib.length(e);
    let answer = true;
    let i = 0;
    let level = 0;
    let state = 0;
    while (answer && i < n) {
        let c = e[i];
        if (state === 0) {
            if (c === "1") {
                state = 1;
            }
            else if (c === "(") {
                level = level + 1;
            }
            else {
                answer = false;
            }
        }
        else {
            if (c === "+") {
                state = 0;
            }
            else if (c === ")" && level > 0) {
                level = level - 1;
            }
            else {
                answer = false;
            }
        }
        i = i + 1;
    }
    if (answer && level === 0 && state === 1) {
        Lib.print("true\n");
    }
    else {
        Lib.print("false\n");
    }
}
