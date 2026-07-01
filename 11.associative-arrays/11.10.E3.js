"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Enter associative arrays \{\"student_id\": s, \"japanese\": j, \"math\": m, \"english\": e\}: ");
    let a = JSON.parse(Lib.input());

    Lib.print("---\n");
    let len_students = Lib.length(a);
    delete a["students_id"];
    delete a["japanese"];
    delete a["english"];
    Lib.print(a["math"] / len_students);
}