"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Enter an associative array \{\"student_id\": s, \"japanese\": j, \"math\": m, \"english\": e\}: ");
    let a = JSON.parse(Lib.input());

    Lib.print("---\n");
    Lib.print(a["math"]); 
    Lib.print(".\n");
}