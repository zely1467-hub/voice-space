"use strict";
const verify = (output) => {return output.trimEnd().match(/LINE *\++=+\++ *\n *3 *\|+: *a *:\|+ *<-+ *BLOCK *3-+29 *\n *\++-+\++ *\n *6 *\|+ *"?Silver"? *\|+ *<-+ *INPUT *"?Silver"? *\n *\++-+\++ *\n *7 *\|+ *\|+ *<-+ *if *\(a *=+ *"?Gold"?\): *false *\n *\++-+\++=+\++ *\n *18 *\|+ *\|+: *b *:\|+ *<-+ *ELSE *BLOCK *18-+28 *\n *\++-+\++-+\++ *\n *21 *\|+ *\|+ *"?Light *and *soft"? *\|+ *<-+ *INPUT *"?Light *and *soft"? *\n *\++-+\++-+\++ *\n *22 *\|+ *\|+ *\|+ *<-+ *if *\(b *=+ *"?Light *and *soft"?\): *true *\n *\++-+\++-+\++=+\++ *\n *22 *\|+ *\|+ *\|+: *:\|+ *<-+ *IF *BLOCK *22-+24 *\n *\++-+\++-+\++[=-]+\++ *\n *23 *\|+ *\|+ *\|+ *\|+ *<-+ *PRINT *"?You *are *Summer.\\n"? *\n *\++=+\++=+\++=+\++\s*$/i);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
