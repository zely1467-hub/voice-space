"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
// My Shop App
{
    // 商品リスト
    let products = [
        {"id": 1, "name": "apple", "price": 180, "description": "Red!"},
        {"id": 2, "name": "banana", "price": 120, "description": "Yellow!"},
        {"id": 3, "name": "strawberry", "price": 380, "description": "Sweet!"},
    ];
    // 次に追加する商品に付けるID
    let next_id = 4;

    // タイトル表示
    Lib.print("🍎 MY SHOP APP 🍎\n\n");

    // needs_next が false になるまで繰り返す
    let needs_next = true;
    while (needs_next) {
        Lib.print("Enter a command: show, search, add, update, delete or exit\n");
        Lib.print("COMMAND> ");
        let command = Lib.input(); // 入力されたコマンド
        Lib.print("\n");

        if (command === "show") {
            // 商品リストを表示する
            Lib.print("--- PRODUCT LIST ---\n");
            let len_products = Lib.length(products);
            let i = 0;
            while (i < len_products) {
                let product = products[i];
                Lib.print("[" + String(product["id"]) + "] ");
                Lib.print(product["name"]);
                Lib.print(", ");
                Lib.print(product["price"]);
                Lib.print(" yen, ");
                Lib.print(product["description"]);
                Lib.print("\n");
                i = i + 1;
            }
            Lib.print("\n");
        }
        else if (command === "search") {
            // 商品の名前をキーワード検索して指定した並び順で表示する
            Lib.print("--- SEARCH PRODUCTS ---\n");
            // 検索キーワードを入力する
            Lib.print("KEYWORD> ");
            let keyword = Lib.input();
            // 表示のソート（並び替え）項目を入力する
            let sort_item;
            let needs_sort_item = true;
            while (needs_sort_item) {
                Lib.print("Enter a sort item: name, price or description.\n");
                Lib.print("SORT-ITEM> ");
                let input = Lib.input();
                if (input !== "name" && input !== "price" && input !== "description") {
                    Lib.print("Enter a valid sort item.\n");
                }
                else {
                    sort_item = input;
                    needs_sort_item = false;
                }
            }
            Lib.print("\n--- SEARCH RESULTS ---\n");
            /*?
             * 問. ここに商品リストのうち名前に KEYWORD が含まれているもののみを，
             * 入力された sort_item の値でソートした順序で，
             * show コマンドを入力したときと同じ形式で印字しましょう．
            ?*/
            Lib.print("(Problem... Add Your Code To Display Search Results...)\n");
            Lib.print("\n");
        }
        else if (command === "add") {
            // 商品リストに商品をひとつ追加する
            Lib.print("--- ADD A PRODUCT ---\n");
            // 名前を入力する
            let name;
            let needs_name = true;
            while (needs_name) {
                Lib.print("NAME> ");
                let input = Lib.input();
                if (Lib.length(input) === 0) {
                    Lib.print("Enter a valid name.\n");
                }
                else {
                    name = input;
                    needs_name = false;
                }
            }
            // 価格を入力する
            let price;
            let needs_price = true;
            while (needs_price) {
                Lib.print("PRICE> ");
                let input = Lib.input();
                let number = Number(input);
                if (isNaN(number) || number !== Math.floor(number)) {
                    Lib.print("'" + input + "' is not an integer.\n");
                }
                else {
                    price = number;
                    needs_price = false;
                }
            }
            // 商品説明を入力する
            let description;
            let needs_description = true;
            while (needs_description) {
                Lib.print("DESCRIPTION> ");
                let input = Lib.input();
                if (Lib.length(input) === 0) {
                    Lib.print("Enter a description.\n");
                }
                else {
                    description = input;
                    needs_description = false;
                }
            }
            // 商品データを新たに生成して商品リストに追加する
            let product = {"id": next_id, "name": name, "price": price, "description": description};
            Lib.push(products, product);
            next_id = next_id + 1;
            Lib.print("The product added.\n\n");
        }
        else if (command === "update") {
            // 商品リスト内にある商品のデータを更新する
            Lib.print("--- UPDATE A PRODUCT ---\n");
            // 更新するIDを入力する
            let id;
            let needs_id = true;
            while (needs_id ) {
                Lib.print("ID> ");
                let input = Lib.input();
                let exists = true;
                /*?
                 * 問. 入力された文字列と同じIDを持つ商品があれば exists の値を true に，
                 * なければ false に設定するためのコードをここに書きましょう．
                ?*/
                if (!exists) {
                    Lib.print("Enter a valid ID.\n");
                }
                else {
                    id = input;
                    needs_id = false;
                }
            }
            /*?
             * 問. addコマンドと同じように NAME, PRICE, DESCRIPTION をキーボードから読み込んで
             * その値で，商品リスト内の指定されたIDの商品情報を更新しましょう．
            ?*/
            Lib.print("(Problem... Add Your Code To Update the Product with The Given ID...)\n");

            Lib.print("The product updated.\n");
            Lib.print("\n");
        }
        else if (command === "delete") {
            // 商品リスト内にある商品のデータを削除する
            Lib.print("--- DELETE A PRODUCT ---\n");
            // 削除する商品のIDを入力する
            let id;
            let needs_id = true;
            while (needs_id ) {
                Lib.print("ID> ");
                let input = Lib.input();
                let exists = true;
                /*?
                 * 問. 入力された文字列と同じIDを持つ商品があれば exists の値を true に，
                 * なければ false に設定するためのコードをここに書きましょう．
                ?*/
                if (!exists) {
                    Lib.print("Enter a valid ID.\n");
                }
                else {
                    id = input;
                    needs_id = false;
                }
            }
            /*?
             * 問. 商品リストから，指定されたIDの商品を削除しましょう．
            ?*/
            Lib.print("(Problem... Add Your Code To Delete the Product with The Given ID...)\n");

            Lib.print("The product deleted.\n");
            Lib.print("\n");
        }
        else if (command === "exit") {
            Lib.print("Bye!\n");
            needs_next = false;
        }
        else {
            Lib.print("'" + command + "' is an invalid command.\n\n");
        }
    }
}