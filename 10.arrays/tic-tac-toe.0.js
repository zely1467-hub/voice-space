'use strict';
const Lib = require(require("os").homedir() + "/c/lib.js");

// このコードは Tic Tac Toe の作りかけ．ＸとＯがマスに置けるようになった状態．
// 問題1: 今はＸやＯが置かれているところにさらに文字を上書きできてしまう．
//   → 一度文字を置いたマスには文字を置けないようにしましょう．
// 問題2: 今はＸやＯが3つ一列に並んでも勝ち負けの判定はせずにゲームが続いてしまう．
//   → ＸやＯが3つ一列に並んだらどちらが勝者かを表示してゲームが終わるようにしましょう．
//   → また空きマスがなくなったら引き分けであることを表示してゲームが終わるようにしましょう．

{
    //// 定数 (値を更新するつもりのない変数)
    
    // 次の文字列をprintするとターミナルスクリーンをクリアできる．
    let STR_CLEAR_SCREEN = "\x1bc";

    // プレイヤーの番号
    let PLAYER_1 = 1;   // 先手
    let PLAYER_2 = 2;   // 後手

    // マスの状態を表す文字
    let CHAR_EMPTY = "・";   // 空欄
    let CHAR_1 = "Ｘ";       // 先手の駒
    let CHAR_2 = "Ｏ";       // 後手の駒

    // 現在の手番のプレイヤーの番号
    let current_player = PLAYER_1;

    // 現在の手番のプレイヤーの文字
    let current_char = CHAR_1;

    // 9つの各マスの状態(先手駒・後手駒・空欄の3種)を保持する変数
    let a1 = CHAR_EMPTY;
    let a2 = CHAR_EMPTY;
    let a3 = CHAR_EMPTY;
    let b1 = CHAR_EMPTY;
    let b2 = CHAR_EMPTY;
    let b3 = CHAR_EMPTY;
    let c1 = CHAR_EMPTY;
    let c2 = CHAR_EMPTY;
    let c3 = CHAR_EMPTY;

    let input_text;     // ユーザからの入力文字列を保持する変数
    let input_text_0;   // 入力文字列の0文字目を保持する変数
    let input_text_1;   // 入力文字列の1文字目を保持する変数

    // 次のユーザの手番に移行すべき状態であるか(true)否か(false)を保持する変数
    let goes_next = false;

    // エラーメッセージを保持する変数
    let error_message = "";

    while (true) {
        // 盤面の印字
        Lib.print(STR_CLEAR_SCREEN);
        Lib.print("[Tic Tac Toe]\n");
        Lib.print("　 １２３\n");
        Lib.print("Ａ " + a1 + a2 + a3 + "\n");
        Lib.print("Ｂ " + b1 + b2 + b3 + "\n");
        Lib.print("Ｃ " + c1 + c2 + c3 + "\n");
        Lib.print("\n");
        if (error_message !== "") {
            Lib.print(error_message + "\n");
        }

        // 入力を促すメッセージの印字
        Lib.print("[Player " + String(current_player) + "]\n");
        Lib.print(current_char + "をどこに置きますか? \n");
        Lib.print("(例: A1, B3 など) \n");

        // 入力の読み取り
        input_text = Lib.input();
        input_text_0 = Lib.slice(input_text, 0, 1);
        input_text_1 = Lib.slice(input_text, 1, 2);

        // 入力文字列に応じた状態の更新
        if (input_text_0 === "A") {
            if (input_text_1 === "1") {
                a1 = current_char;
                goes_next = true;
            }
            else if (input_text_1 === "2") {
                a2 = current_char;
                goes_next = true;
            }
            else if (input_text_1 === "3") {
                a3 = current_char;
                goes_next = true;
            }
            else {
                goes_next = false;
            }
        }
        else if (input_text_0 === "B") {
            if (input_text_1 === "1") {
                b1 = current_char;
                goes_next = true;
            }
            else if (input_text_1 === "2") {
                b2 = current_char;
                goes_next = true;
            }
            else if (input_text_1 === "3") {
                b3 = current_char;
                goes_next = true;
            }
            else {
                goes_next = false;
            }
        }
        else if (input_text_0 === "C") {
            if (input_text_1 === "1") {
                c1 = current_char;
                goes_next = true;
            }
            else if (input_text_1 === "2") {
                c2 = current_char;
                goes_next = true;
            }
            else if (input_text_1 === "3") {
                c3 = current_char;
                goes_next = true;
            }
            else {
                goes_next = false;
            }
        }
        else {
            goes_next = false;
        }

        if (goes_next) {   // 次のプレイヤーの入力に状態を遷移すべきなら
            if (current_player === PLAYER_1) {
                current_player = PLAYER_2;
                current_char = CHAR_2;
            }
            else {
                current_player = PLAYER_1;
                current_char = CHAR_1;
            }
            error_message = "";
        }
        else {   // 今のプレイヤーの入力が無効でやり直すべきなら
            error_message = "!!! ERROR !!!\n";
            error_message = error_message + "入力文字列[" + input_text + "]は無効です．\n";
            error_message = error_message + "有効な字列を入力して下さい．\n";
        }
    }
}