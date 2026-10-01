"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let s = Lib.input(); 

    Lib.print("---\n");

    let pos = 0; 

    function parseE() {
        let matched = false;

        if (pos < s.length && s[pos] === "1") {
            pos = pos + 1;
            matched = true;
        } else if (pos < s.length && s[pos] === "(") {
            pos = pos + 1; 
            if (parseE()) {
                if (pos < s.length && s[pos] === ")") {
                    pos = pos + 1; 
                    matched = true;
                }
            }
        }

        if (!matched) {
            return false;
        }

        while (pos < s.length && s[pos] === "+") {
            pos = pos + 1; 
            if (!parseE()) {
                return false; 
            }
        }

        return true;
    }

    let isValid = parseE() && pos === s.length;

    Lib.print(isValid ? "true\n" : "false\n");
}