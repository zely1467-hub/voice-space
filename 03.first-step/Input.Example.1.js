"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
{
    Lib.print("Input The Hourly Wage: ");
    let hourly_wage = Number(Lib.input());   // 時給を数値として読み取る

    Lib.print("Input The First Employee's Name: ");
    let name_1 = Lib.input();                // 労働者1の名前を文字列として読み取る
    Lib.print("Input The Working Time (Hours): ");
    let hours_1 = Number(Lib.input());       // 労働者1の勤務時間を数値として読み取る

    Lib.print("Input The Second Employee's Name: ");
    let name_2 = Lib.input();                //  労働者2の名前を文字列として読み取る
    Lib.print("Input The Working Time (Hours): ");
    let hours_2 = Number(Lib.input());       // 労働者2の勤務時間を数値として読み取る

    //// 従業員1の情報の印字
    let salary_1 = hourly_wage * hours_1;    // 従業員1の賃金に名前を付ける
    Lib.print(name_1);                       // 従業員1の名前を印字する
    Lib.print(": ");
    Lib.print(salary_1);                     // 従業員1の賃金を印字する
    Lib.print(" yen\n");

    //// 従業員2の情報の印字
    let salary_2 = hourly_wage * hours_2;    // 従業員2の賃金に名前を付ける
    Lib.print(name_2);                       // 従業員2の名前を印字する
    Lib.print(": ");
    Lib.print(salary_2);                     // 従業員2の賃金を印字する
    Lib.print(" yen\n");

    Lib.print("---\n");

    //// 賃金の合計の情報を印字
    Lib.print("Total: ");
    Lib.print(salary_1 + salary_2);          // 賃金の合計を印字する
    Lib.print(" yen\n");
}