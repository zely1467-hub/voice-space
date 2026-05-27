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
    Lib.print("Input the favorite fruit: ");
    const myFavorite = Lib.input();
    Lib.print("\nMy favorite fruit is");
    await w(9);
    Lib.print(` ${myFavorite}`);
    await w(3, true);
    Lib.print("\n\n");
})();
