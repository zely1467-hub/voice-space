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

    int h = a / 60;
    int m = a % 60;

    cout << h;
    cout << string("\n");
    cout << m;
    cout << string("\n");
}