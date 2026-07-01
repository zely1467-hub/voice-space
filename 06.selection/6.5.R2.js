"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    // Which jewelry looks better on you?
    // Choose "Gold" or "Silver"
    let a = Lib.input();
    if (a === "Gold") {
        // What color style fits you?
        // Choose "Bright and fresh" or "Rich and deep"
        let b = Lib.input();
        if (b === "Bright and fresh") {
            Lib.print("You are Spring.\n");
        }
        else {
            Lib.print("You are Autumn.\n");
        }
    }
    else {
        // What color style fits you?
        // Choose "Light and soft" or "Strong and sharp"
        let b = Lib.input();
        if (b === "Light and soft") {
            Lib.print("You are Summer.\n");
        }
        else {
            Lib.print("You are Winter.\n");
        }
    }
}