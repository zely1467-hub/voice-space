"use strict";
const https = require("node:https");
const fs = require("node:fs");
const os = require("os");

if (process.argv.length < 3) { process.exit(1); }
const problemId = process.argv[2];
const path = process.argv[3];

const workingDir = `/c/.tls/problems/${problemId}`;

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
        if (res.statusCode === 200 && data !== "") {
            const submissionId = data.slice(data.indexOf(" ", 0) + 1, data.length).trimEnd();
            process.stdout.write(`SUBMISSION-ID: ${submissionId}\n`);
            process.exit(0);
        } else {
            process.exit(1);
        }
    });
    res.resume();
});

const readFile = (filename)=> {
    return String(fs.readFileSync(os.homedir() + `${workingDir}/${filename}`));
};
const test_result = readFile("test_result.txt").trimEnd();
const score = readFile("score.txt").trimEnd();
const code = readFile("code.txt");
const kvs = [];
kvs.push('problem_id=' + encodeURIComponent(problemId));
kvs.push('test_result=' + encodeURIComponent(test_result));
kvs.push('score=' + encodeURIComponent(score));
kvs.push('source_code=' + encodeURIComponent(code));
const queryString = kvs.join("&");
req.write(queryString);
req.end();
