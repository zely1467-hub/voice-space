"use strict";
const verify = (output) => {return output.trimEnd().match(/LINE *\+*=+\+* *\n *3 *\|*: *a *:\|* *<-+ *BLOCK *3-+11 *\n *\+*-+\+* *\n *4 *\|* *3 *\|* *<-+ *INPUT *"?3"? *\n *\+*-+\+* *\n *5 *\|* *\|* *<-+ *if *\(a *% *2 *> *0\): *true *\n *\+*-+\+*=+\+* *\n *5 *\|* *\|*: *:\|* *<-+ *IF *BLOCK *5-+7 *\n *\+*-+\+*-+\+* *\n *6 *\|* *\|* *\|* *<-+ *PRINT *"?Odd\\n"? *\n *\+*=+\+*=+\+*\s*$/i);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
