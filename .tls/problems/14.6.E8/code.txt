#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main() {
    cout << unitbuf << boolalpha;   

    string a;
    getline(cin, a);

    cout << string("---\n");

    int first_at = a.find("@", 0);
    bool cond1_and_2 = (first_at != string::npos) && (first_at > 0) && (a.find("@", first_at + 1) == string::npos);

    bool cond3 = false;
    if (cond1_and_2) {
        int first_dot = a.find(".", first_at + 1);
        if (first_dot != string::npos) {
            cond3 = true;
        }
    }

    bool is_email = cond1_and_2 && cond3;

    cout << is_email;
    cout << string("\n");
}