"use strict";
const verify = (output) => {return output.trimEnd().match(/LINE *\++=+\++ *\n+ *3 *\|+: *a *:\|+ *<-+ *BLOCK *3-+25 *\n+ *\++-+\++ *\n+ *4 *\|+ *undefined *\|+ *\n+ *\++-+\++ *\n+ *5 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?undefined"? *\n+ *\++-+\++ *\n+ *6 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++ *\n+ *8 *\|+ *0 *\|+ *\n+ *\++-+\++ *\n+ *9 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?0"? *\n+ *\++-+\++ *\n+ *10 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++ *\n+ *14 *\|+ *1 *\|+ *\n+ *\++-+\++ *\n+ *15 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?1"? *\n+ *\++-+\++ *\n+ *16 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++ *\n+ *18 *\|+ *2 *\|+ *\n+ *\++-+\++ *\n+ *19 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?2"? *\n+ *\++-+\++ *\n+ *20 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++-+\++ *\n+ *22 *\|+ *3 *\|+ *\n+ *\++-+\++ *\n+ *23 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?3"? *\n+ *\++-+\++ *\n+ *24 *\|+ *\|+ *<-+ *(PRINT|OUTPUT) *"?\\n"? *\n+ *\++=+\++\s*$/i);};
const fs = require('fs');
const result = verify(fs.readFileSync("output.txt", "utf8"));
if (result) {
    process.stdout.write("1\n");
} else {
    process.stdout.write("0\n");
}
