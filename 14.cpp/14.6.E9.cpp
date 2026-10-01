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

    int current = 1;
    while (current <= a) {
        cout << current;
        cout << string("\n");
        current = current + 2;
    }
}