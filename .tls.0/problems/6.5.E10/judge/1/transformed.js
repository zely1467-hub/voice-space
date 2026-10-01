"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    Lib.print("Is 2nd period free? (Y/N): ");
    let q2 = Lib.input();   

    Lib.print("Is 3rd period free? (Y/N): ");
    let q3 = Lib.input();   

    Lib.print("---\n");

    let message;
    if (q2 === "N" && q3 === "N") {
        message = "Newdays";
    } else if (q2 === "Y" && q3 === "Y") {
        message = "Disney";
    } else {
        message = "Saizeriya";
    }

    Lib.print(message);
    Lib.print("\n");
}