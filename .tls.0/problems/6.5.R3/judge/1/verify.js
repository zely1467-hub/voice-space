"use strict";
const verify = (output) => {return output.trimEnd().match(/LINE *\++=+\++ *\n *3 *\|+: *a *:\|+ *<-+ *BLOCK *3-+19 *\n *\++-+\++ *\n *6 *\|+ *"?Castard"? *\|+ *<-+ *INPUT *"?Castard"? *\n *\++-+\++ *\n *7 *\|+ *\|+ *<-+ *if *\(a *=+ *"?Tsubuan"?\): *false *\n *\++-+\++ *\n *10 *\|+ *\|+ *<-+ *if *\(a *=+ *"?Koshian"?\): *false *\n *\++-+\++ *\n *13 *\|+ *\|+ *<-+ *if *\(a *=+ *"?Castard"?\): *true *\n *\++-+\++=+\++ *\n *13 *\|+ *\|+: *:\|+ *<-+ *IF *BLOCK *13-+15 *\n *\++-+\++-+\++ *\n *14 *\|+ *\|+ *\|+ *<-+ *PRINT *"?200 *yen\\n"? *\n *\++=+\++=+\++\s*$/i);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
