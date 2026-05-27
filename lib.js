"use strict";
const Lib = (() => {
    const input = (() => {
        const BUFSIZE = 256;
        const fs = require("fs");
        const buf = Buffer.alloc(BUFSIZE);
        const fd = (() => {
            if (process.platform.substring(0, 3) === "win") {
                return process.stdin.fd;
            } else {
                return fs.openSync("/dev/stdin", "rs");
            }
        })();
        let content = "";
        return () => {
            while (true) {
                const index = content.indexOf("\n");
                if (index >= 0) {
                    const result = content.substring(0, index);
                    content = content.substring(index + 1);
                    return result;
                }
                const bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
                if (bytesRead === 0) { return content }
                content += buf.toString("utf8", 0, bytesRead);
            }
        };
    })();
    const print = (x) => {
        if (x instanceof Array) {
            print("[ ");
            for (let i = 0; i < x.length; i += 1) {
                print(x[i]);
                if (i + 1 < x.length) { print(", "); }
            }
            print(" ]");
        } else if (x instanceof Function) {
            process.stdout.write(String(x));
        } else if (x instanceof Object) {
            let keys = Object.keys(x);
            print("{ ");
            for (let i = 0; i < keys.length; i += 1) {
                print(keys[i]);
                print(": ");
                print(x[keys[i]]);
                if (i + 1 < keys.length) { print(", "); }
            }
            print(" }");
        } else {
            process.stdout.write(String(x));
        }
    }
    const length = (xs) => xs.length;
    const slice = (xs, start, end) => xs.slice(start, end);
    const charAt = (s, i) => s.charAt(i);
    const indexOf = (s, t, i) => s.indexOf(t, i);
    const push = (xs, x) => xs.push(x);
    const concat = (xs, ys) => xs.concat(ys);
    const splice = (xs, i, n) => xs.splice(i, n);
    return {input, print, length, slice, charAt, indexOf, push, concat, splice};
})();
module.exports = Lib;
// Ver. 2025-06-30
