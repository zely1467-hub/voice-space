"use strict";
const transform = (code)=>{return code.replace(/\}\s*$/, ` Lib.print('--- Verification by the evaluation system\\n'); Lib.print(mean([20, 22, 24, 26, 28, 30])); Lib.print('\\n'); }`); };
const fs = require('fs');
if (process.argv.length < 2) { process.exit(1); }
const codeFilename = process.argv[2];
const transformed = transform(fs.readFileSync(codeFilename, "utf8"));
process.stdout.write(transformed);
