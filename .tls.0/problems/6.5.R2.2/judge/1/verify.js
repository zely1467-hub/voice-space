"use strict";
const verify = (output) => {return output.trimEnd().match(/LINE *\++=+\++ *\n *3 *\|+: *a *\|+ *<-+ *BLOCK *3-+29 *\n *\++-+\++ *\n *6 *\|+ *"?Gold"? *\|+ *<-+ *INPUT *"?Gold"? *\n *\++-+\++ *\n *7 *\|+ *\|+ *<-+ *if *\(a *=+ *"?Gold"?\): *true *\n *\++-+\++=+\++ *\n *7 *\|+ *\|+: *b *:\|+ *<-+ *IF *BLOCK *7-+17 *\n *\++-+\++-+\++ *\n *10 *\|+ *\|+ *"?Rich *and *deep"? *\|+ *<-+ *INPUT *"?Rich *and *deep"? *\n *\++-+\++-+\++ *\n *11 *\|+ *\|+ *\|+ *<-+ *if *\(b *=+ *"?Bright *and *fresh"?\): *false *\n *\++-+\++-+\++=+\++ *\n *14 *\|+ *\|+ *\|+: *:\|+ *<-+ *ELSE *BLOCK *14-+16 *\n *\++-+\++-+\++[=-]+\++ *\n *15 *\|+ *\|+ *\|+ *\|+ *<-+ *PRINT *"?You *are *Autumn.\\n"? *\n *\++=+\++=+\++=+\++\s*$/i);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
