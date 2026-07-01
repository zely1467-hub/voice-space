"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// 連想配列のキーを削除する例
{
    Lib.print("Enter an array of color names (in JSON): ");
    // 「好きな色」のアンケートの結果（回答内容の配列）
    let replies = JSON.parse(Lib.input());

    //// 次のキーと値をの組を持つ連想配列 color_to_num を作っていく (color to number の意)．
    // (キー: 色，値: その色の回答数)
    let color_to_num = {};

    let i = 0;
    let len_replies = Lib.length(replies);
    while (i < len_replies) {
        let color = replies[i];
        if (! Object.hasOwn(color_to_num, color)) {
            // もし color_to_num に color がキーとして登録されていないとき
            // color_to_num にキーと値の組 (キー: color, 値： 0) をまず登録する．
            color_to_num[color] = 0;
        }
        // この時点で color_to_num は color をキーとして持つ．
        // この反復でcolor の回答を新しく一つ見つけたので，回答数を1増やす．
        color_to_num[color] = color_to_num[color] + 1;
        i = i + 1;
    }
    // この時点で連想配列 color_to_num には次のキーと値の組が登録されている．
    // (キー: 色, 値: その色の回答数)

    //// color_to_num の内容を見て，最も多く回答された色を決定する．
    // 以下，color_to_num の各キーとその値を反復で処理する．
    let colors = Object.keys(color_to_num); // キー(色)の配列
    let len_colors = Lib.length(colors);
    let max_num = -1;   // 反復の中で見てきた回答数のうち最大のものを保持する

    // 反復の中で見てきた回答数のうち最大のもののキー(色)を保持するリスト
    // 回答数が同率1位の色が複数あるかもしれない．それらをすべてこのリストに保持する
    let colors_of_max_num;

    let j = 0;
    while (j < len_colors) {
        let color = colors[j];
        let num = color_to_num[color];
        if (num > max_num) {
            // より回答数の大きい色が見つかったら各変数の値を更新する．
            max_num = num;
            colors_of_max_num = [color];
        }
        else if (num === max_num) {
            // これまで見てきた回答数の最大値と同じ回答数の別の色を見つけた場合：
            // その色を colors_of_max_num に追加しておく．
            Lib.push(colors_of_max_num, color)
        }
        j = j + 1;
    }
    Lib.print("The Most Loved Color(s): ");
    let k = 0;
    let len_colors_of_max_num = Lib.length(colors_of_max_num);
    while (k < len_colors_of_max_num) {
        if (k !== 0) {
            Lib.print(", ");
        }
        Lib.print(colors_of_max_num[k]);
        k = k + 1;
    }
    Lib.print("\n");
    /*! 参考として連想配列 color_to_num の内容も印字しておきます．!*/
    Lib.print("===\n");
    Lib.print(color_to_num);
    Lib.print("\n");
}