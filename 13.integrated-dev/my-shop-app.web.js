"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");
const http = require("node:http");
const querystring = require("node:querystring");
{
    //// HTTPサーバ設定用データ
    let port = 3000;
    let hostname = "127.0.0.1";


    //// 商品に関連するデータと関数

    // 商品リスト
    let products = [
        {"id": 1, "name": "apple", "price": 180, "description": "Red!"},
        {"id": 2, "name": "banana", "price": 120, "description": "Yellow!"},
        {"id": 3, "name": "strawberry", "price": 380, "description": "Sweet!"},
    ];
    // 次に追加する商品に付けるID
    let next_id = 4;


    // 商品の新規生成
    let newProduct = (name, price, description) => {
        let id = next_id;
        next_id = next_id + 1;
        return {"id": id, "name": name, "price": price, "description": description};
    };

    // 商品情報表示用文字列の生成
    let product_info = (product) => {
        let info = "";
        info = info + "[" + String(product["id"]) + "] ";
        info = info + product["name"] + ", ";
        info = info + String(product["price"]) + " yen, ";
        info = info + product["description"] + "\n";
        return info;
    };
    
    // 商品をソート（並び替え）する処理
    let sortProducts = (order) => {
        /*?
         * 問. order で示された順序で products をソートしましょう．
        ?*/
    }


    // 商品リストに商品をひとつ追加する処理
    let addProduct = (name, price, description) => {
        /*?
         * 問. name, price, description の値で商品をひとつ生成して products に追加しましょう．
        ?*/
    };


    // 商品の情報を更新する処理
    let updateProduct = (id, name, price, description) => {
        /*?
         * 問. 指定された id の商品の情報を name, price, description の値で更新しましょう．
        ?*/
    };


    // 商品リスト内にある商品のデータを削除する処理
    let deleteProduct = (id) => {
        /*?
         * 問. 指定された id の商品の情報を削除しましょう．
        ?*/
    };




    ////!!!! 以下は変更する必要はありません


    //// 商品情報表示用HTML 
    let htmlProduct = (product) => {
        return "<tr><td>" + product["id"] + "</td><td>" + product["name"] + "</td><td>&yen;" + product["price"] + "</td><td>" + product["description"] + "</td></tr>\n";
    };
    
    //// 商品情報テーブル表示用HTML 
    let htmlProductItems = (products) => {
        let lines = '<table>\n';
        lines += "<th>ID</th><th>NAME</th><th>PRICE</th><th>DESCRIPTION</th></tr>\n";
        let i = 0;
        while (i < products.length) {
            lines = lines + htmlProduct(products[i]);
            i = i + 1;
        }
        lines = lines + "</table>\n";
        return lines;
    };
    

    //// ページHTML 
    let makeContent = (req, res, query, products) => {
        let queryInfo = ""
        let searchKeyword;
        if (query !== undefined) {
            if (Object.keys(query).includes("search")) {
                searchKeyword = query["search"];
            }
            for (let k of Object.keys(query)) {
                queryInfo = queryInfo + `<li><span style="font-weight: bold">${k}</span>: ${(query[k])}</li>\n`;
            }
        }
        let searchResultLabel = "";
        if (searchKeyword !== undefined && searchKeyword !== "") {
            searchResultLabel = `<div>Search Result by ` + searchKeyword + `:</div>`;
        }
        let requestInfo = "";
        for (let k of Object.keys(req)) {
            requestInfo = requestInfo + `<li><span style="font-weight: bold">${k}</span>: ${(req[k])}</li>\n`;
        }
        return `
<html>
<head>
<meta charset="UTF-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+Mono:wght@100..900&family=Noto+Serif+JP:wght@200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet"/>
<style>
html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
}
body {
    font-family: "Noto Sans JP", sans-serif;
}
table {
    border-collapse: collapse;
    border: solid 2px rgb(0, 0, 0);
}
th {
    padding: 0.25rem;
    border: solid 2px rgb(0, 0, 0);
}
td {
    padding: 0.25rem;
    border: solid 1px rgb(0, 0, 0);
}
</style>
</head>
<body>

<h1>My Shop</h1>


<h2>Product List</h2>

<div>
<form action="" method="get">
<span style="font-weight: bold">Order by</span>
<input type="radio" name="order" value="id_asc"/>ID🔼,
<input type="radio" name="order" value="id_desc"/>ID🔽,
<input type="radio" name="order" value="name_asc"/>Name🔼,
<input type="radio" name="order" value="name_desc"/>Name🔽,
<input type="radio" name="order" value="price_asc"/>Price🔼,
<input type="radio" name="order" value="price_desc"/>Price🔽
<br/>
<span style="font-weight: bold">Search:</span>
<input type="text" name="search" value=""/>
<input type="submit" value="Search"/>
</form>
</div>

<p>
${searchResultLabel}
<ol>
${htmlProductItems(products).trimEnd()}
</ol>
</p>



<h2>Menu</h2>


<h3>Add a New Product</h3>

<form action="" method="POST">
<input type="hidden" name="action" value="add"/>

<p>
Product Name:<br/><input type="text" name="name"/>
<br/>
Price:<br/><input type="text" name="price"/>
<br/>
Description:<br/><input type="text" name="description"/>
</p>

<p>
<input type="submit" value="Add"/>
</p>

</form>


<h3>Update a Product</h3>

<form action="" method="POST">
<input type="hidden" name="action" value="update"/>

<p>
ID:<br/><input type="text" name="id"/>
<br/>
Name:<br/><input type="text" name="name"/>
<br/>
Price:<br/><input type="text" name="price"/>
<br/>
Description:<br/><input type="text" name="description"/>
</p>

<p>
<input type="submit" value="Update"/>
</p>
</form>



<h3>Delete a Product</h3>

<form action="" method="POST">
<input type="hidden" name="action" value="delete"/>

<p>
ID:<br/><input type="text" name="id"/>
</p>

<p>
<input type="submit" value="Deete"/>
</p>
</form>



</body>
</html>
`;
    };


    //// POST リクエストの処理 (add, update, delete)
    let doPost = (req, res, query) => {
        let action;
        if (Object.keys(query).includes("action")) {
            action = query["action"];
        }
        if (action === "add") {
            let name = query["name"];
            let price = Number(query["price"]);
            let description = query["description"];
            addProduct(name, price, description);
        }
        else if  (action === "update") {
            let id = Number(query["id"]);
            let name = query["name"];
            let price = Number(query["price"]);
            let description = query["description"];
            updateProduct(id, name, price, description);
        }
        else if  (action === "delete") {
            let id = Number(query["id"]);
            deleteProduct(id);
        }
        let content = makeContent(req, res, query, products); // ブラウザに表示するHTML
        // HTTPレスポンスを送る
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    };
    

    //// GET リクエストの処理 (search)
    const doGet = (req, res, query) => {
        let order;
        let searchKeyword;
        if (query !== undefined && Object.keys(query).includes("order")) {
            order = query["order"];
        }
        if (query !== undefined && Object.keys(query).includes("search")) {
            searchKeyword = query["search"];
        }
        if (order !== undefined) {
            sortProducts(order);
        }
        let ps = products;
        if (searchKeyword !== undefined && searchKeyword !== "") {
            ps = [];
            let i = 0;
            while (i < products.length) {
                let product = products[i];
                if (product["name"].indexOf(searchKeyword, 0) >= 0) {
                    ps.push(product);
                }
                i = i + 1;
            }
        }
        let content = makeContent(req, res, query, ps); // ブラウザに表示するHTML
        // HTTPレスポンスを送る
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    };
    

    //// HTTPサーバーを生成する処理
    let makeServer = () => {
        let queryToString = (query) => {
            let result = "";
            result += "{ ";
            let keys = Object.keys(query);
            let i = 0;
            while (i < keys.length) {
                let key = keys[i];
                let value = query[key];
                if (value instanceof Array) {
                    result += `${key}: [`;
                    let j = 0;
                    while (j < value.length) {
                        result += `"${value[j].replace("\\", "\\\\").replace("\"", "\\\"")}"`;
                        if (j + 1 < value.length) { result += ", "; }
                        j = j + 1;
                    }
                    result += "]";
                }
                else {
                    result += `${key}: "${query[key].replace("\\", "\\\\").replace("\"", "\\\"")}"`;
                }
                if (i + 1 < keys.length) { result += ", "; }
                i = i + 1;
            }
            result += " }";
            return result;
        };
        return http.createServer((req, res) => {
            const url = req["url"];
            if (url === "/favicon.ico") {
                // Ignore the access to /favicon.ico
                return;
            }
            console.log("");
            console.log(`Access at ${(new Date()).toISOString()}]`);
            console.log(`METHOD: ${req.method}`);
            console.log(`URL: ${url}`);
            if (req.method === "POST") {
                let queryData = "";
                req.on("data", (chunk) => { queryData += chunk.toString(); });
                req.on("end", () => {
                    console.log("QUERY_STRING: " + queryData); 
                    let query = querystring.parse(queryData);
                    console.log("QUERY_DATA: " + queryToString(query)); 
                    doPost(req, res, query);
                });
            } else {
                // The method is GET.
                let url = req["url"];
                let indexQ = url.indexOf("?", 0);
                let queryData = (() => {
                    if (indexQ >= 0) {
                        return url.slice(indexQ + 1, url.length);
                    }
                    else {
                        return undefined;
                    }
                })();
                if (queryData !== undefined) {
                    console.log("QUERY_STRING: " + queryData); 
                    let query = querystring.parse(queryData);
                    console.log("QUERY_DATA: " + queryToString(query)); 
                    doGet(req, res, querystring.parse(queryData));
                } else {
                    doGet(req, res, undefined);
                }
            }
        });
    };


    // 処理の開始
    let server  = makeServer();
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}