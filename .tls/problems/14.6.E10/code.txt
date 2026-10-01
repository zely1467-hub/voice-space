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
    long long factorial = 1; 

    while (k <= a) {
        factorial = factorial * k; 
        cout << factorial;
        cout << string("\n");
        k = k + 1;                  
    }
}