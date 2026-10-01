"use strict";
const verify = (output) => {return output.trimEnd().match(/LINE *\++=+\++ *\n+ *3 *\|+: *a *:\|+ *<-+ *BLOCK *3-+21 *\n+ *\++-+\++ *\n+ *4 *\|+ *1 *\|+ *\n+ *\++-+\++ *\n+ *5 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?1"? *\n+ *\++-+\++ *\n+ *6 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++ *\n+ *10 *\|+ *3 *\|+ *\n+ *\++-+\++ *\n+ *11 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?3"? *\n+ *\++-+\++ *\n+ *12 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++ *\n+ *14 *\|+ *5 *\|+ *\n+ *\++-+\++ *\n+ *15 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?5"? *\n+ *\++-+\++ *\n+ *16 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++ *\n+ *18 *\|+ *7 *\|+ *\n+ *\++-+\++ *\n+ *19 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?7"? *\n+ *\++-+\++ *\n+ *20 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++=+\++\s*$/i);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
