#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main() {
    cout << unitbuf << boolalpha;   

    string line;

    getline(cin, line);
    double num1 = stod(line);

    getline(cin, line);
    double num2 = stod(line);

    getline(cin, line);
    double num3 = stod(line);

    getline(cin, line);
    double num4 = stod(line);

    getline(cin, line);
    double num5 = stod(line);

    cout << string("---\n");

    double average = (num1 + num2 + num3 + num4 + num5) / 5.0;

    cout << average;
    cout << string("\n");
}