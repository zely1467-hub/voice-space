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

    getline(cin, line);
    int b = stoi(line);

    getline(cin, line);
    int c = stoi(line);

    cout << string("---\n");

    bool all_different = (a != b) && (b != c) && (a != c);

    cout << all_different;
    cout << string("\n");
}