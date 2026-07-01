"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    let s = Lib.input();
    let i = 0;
    let depth = 0;
    let expect_operand = true;
    let ok = true;

    while (i < Lib.length(s)) {
        let ch = Lib.charAt(s, i);

        if (expect_operand) {
            if (ch === "1") {
                expect_operand = false;
            }
            else if (ch === "(") {
                depth = depth + 1;
            }
            else {
                ok = false;
            }
        }
        else {
            if (ch === "+") {
                expect_operand = true;
            }
            else if (ch === ")") {
                if (depth === 0) {
                    ok = false;
                }
                else {
                    depth = depth - 1;
                }
            }
            else {
                ok = false;
            }
        }

        i = i + 1;
    }

    if (expect_operand || depth !== 0) {
        ok = false;
    }

    Lib.print("---\n");
    Lib.print(ok);
    Lib.print("\n");
}
