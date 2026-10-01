"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input the word including ( and ) : ");
    let a = Lib.input();
    
    let length = Lib.length(a);

    let open = Lib.indexOf(a, "(", 0);
    let close = Lib.indexOf(a, ")", open + 1);

    Lib.print("---\n");
    Lib.print(Lib.slice(a, open + 1, close));
    Lib.print("\n");
} 