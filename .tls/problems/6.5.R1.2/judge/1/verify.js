"use strict";
const verify = (output) => {return output.trimEnd().match(/LINE *\++=+\++ *\n *3 *\|+: *a *:\|+ *<-+ *BLOCK *3-+11 *\n *\++-+\++ *\n *4 *\|+ *4 *\|+ *<-+ *INPUT *"?4"? *\n *\++-+\++ *\n *5 *\|+ *\|+ *<-+ *if *\(a *% *2 *> *0\): *false *\n *\++-+\++=+\++ *\n *8 *\|+ *\|+: *:\|+ *<-+ *ELSE *BLOCK *8-+10 *\n *\++-+\++-+\++ *\n *9 *\|+ *\|+ *\|+ *<-+ *PRINT *"?Even\\n"? *\n *\++=+\++=+\++\s*$/i);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
