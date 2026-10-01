#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main() {
    cout << unitbuf << boolalpha;   

    string line;
    getline(cin, line);
    int a = stoi(line);

    cout << string("---\n");

    int k = 1;
    while (k <= a) {
        int count = 0;
        while (count < k) {
            cout << k;
            if (count < k - 1) {
                cout << string(",");
            }
            count = count + 1;
        }
        cout << string("\n");
        k = k + 1;
    }
}