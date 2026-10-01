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

    int len = a.length();

    int mid_index = len / 2;

    cout << a.substr(mid_index, 1);
    cout << string("\n");
}