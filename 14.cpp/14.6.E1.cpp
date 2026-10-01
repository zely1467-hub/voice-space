#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main() {
    cout << unitbuf << boolalpha;  

    string x;
    int a;   
    int m;   
    string y;
    int b;  
    int n;
    
    string line;
    getline(cin, line);   
    x = line;

    getline(cin, line);   
    a = stoi(line);

    getline(cin, line);   
    m = stoi(line);

    getline(cin, line);   
    y = line;
    
    getline(cin, line);   
    b = stoi(line);

    getline(cin, line);   
    n = stoi(line);

    cout << string("---\n");

    int p = a * m;
    cout << x;
    cout << string(": ");
    cout << p;
    cout << string(" yen");
    cout << string("\n");
 
    int q = b * n;
    cout << y;
    cout << string(": ");
    cout << q;
    cout << string(" yen");
    cout << string("\n");

    cout << string("===");
    cout << string("\n");
    cout << string("Total: ");
    int t = p + q;
    cout << t;
    cout << string(" yen");
    cout << string("\n");
}