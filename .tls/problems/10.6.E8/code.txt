"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let dict = {}; 

    while (true) {
        let word = Lib.input();
        if (word === "") {
            break; 
        }
        let meaning = Lib.input();

        dict[word] = meaning;
    }

    let target = Lib.input();

    Lib.print("---\n");

    if (dict[target] !== undefined) {
        Lib.print(dict[target]);
        Lib.print("\n");
    } else {
        Lib.print("NOT FOUND\n");
    }
}