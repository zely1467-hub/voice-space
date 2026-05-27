"use strict";
const https = require("node:https");
const fs = require("node:fs");
const os = require("os");

if (process.argv.length < 2) { process.exit(1); }
const path = process.argv[2];

const authEncoded = String(fs.readFileSync(os.homedir() + "/c/.tls/data/auth"));
const auth = Buffer.from(authEncoded, "base64").toString("utf8").substring(1);

const options = {
    hostname: "edu.nopico.org",
    port: 443,
    path: path,
    method: "POST",
    headers: {
        "Authorization": "Basic " + auth,
        "Content-Type": "application/x-www-form-urlencoded",
    },
    family: 4,
};
const req = https.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => { data += chunk; });
    req.on("error", (error) => { console.error(`Error: ${error.message}`); });
    res.on("end", () => {
        if (res.statusCode === 200) {
            process.exit(0)

        } else if (res.statusCode === 401) {
            process.exit(1)
        } else {
            process.exit(2)
        }
    });
    res.resume();
});
req.end();
