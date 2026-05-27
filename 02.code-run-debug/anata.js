"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
const w = async (n, e = false, d = true) => {
    const s = () => new Promise((res) => setTimeout(res, 250));
    for (let i = 0; i < n; i = i + 1) {
        if (d) { Lib.print("."); }
        await s();
    }
    if (e) { Lib.print("!"); }
};
(async () => {
    Lib.print("カタカナ3文字からなる好きな言葉を入力して下さい: ");
    const word = Lib.input();
    Lib.print(`\n${word}っ`);
    await w(6, true);
    Lib.print(`\nあなた${word}っていうのねっ`);
    await w(9, true);
    Lib.print(`\n${word}っ`);
    await w(6);
    Lib.print("❤\n\n");
})();