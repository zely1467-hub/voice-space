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

    string first_three = a.substr(0, 3);

    string last_four = a.substr(3, 4);

    cout << first_three + string("-") + last_four;
    cout << string("\n");
}