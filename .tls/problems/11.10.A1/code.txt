"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let A = JSON.parse(Lib.input());

    Lib.print("---\n");

    let follower_count = {};

    let i = 0;
    let len_A = Lib.length(A);
    while (i < len_A) {
        let user_data = A[i];
        let following_list = user_data["following"];

        let j = 0;
        let len_f = Lib.length(following_list);
        while (j < len_f) {
            let target_id = following_list[j];

            if (! Object.hasOwn(follower_count, target_id)) {
                follower_count[target_id] = 0;
            }
            follower_count[target_id] = follower_count[target_id] + 1;

            j = j + 1;
        }

        i = i + 1;
    }

    let user_ids = Object.keys(follower_count);
    let len_users = Lib.length(user_ids);

    let max_count = -1;
    let top_users = [];

    let k = 0;
    while (k < len_users) {
        let uid = user_ids[k];
        let count = follower_count[uid];

        if (count > max_count) {
            max_count = count;
            top_users = [uid]; 
        } else if (count === max_count) {
            Lib.push(top_users, uid); 
        }

        k = k + 1;
    }

    let m = 0;
    let len_top = Lib.length(top_users);
    while (m < len_top) {
        Lib.print(top_users[m]);
        Lib.print("\n");
        m = m + 1;
    }
}