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

    cout << string("---\n");

    int total_absences = a + (b / 3);

    bool requirement_met = (total_absences < 7);

    cout << requirement_met;
    cout << string("\n");
}