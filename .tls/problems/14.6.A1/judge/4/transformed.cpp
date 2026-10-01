#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main() {
    cout << unitbuf << boolalpha;   

    string line;
    getline(cin, line);
    int x = stoi(line);

    getline(cin, line);
    int y = stoi(line);

    getline(cin, line);
    int z = stoi(line);

    cout << string("---\n");

    int temp;
    if (x > y) { temp = x; x = y; y = temp; }
    if (y > z) { temp = y; y = z; z = temp; }
    if (x > y) { temp = x; x = y; y = temp; }

    cout << x;
    cout << string(" ");
    cout << y;
    cout << string(" ");
    cout << z;
    cout << string("\n");
}