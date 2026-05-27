#include <iostream>
#include <string>
#include <time.h>
using namespace std;
struct timespec unit = { 0, 250000000L };
void w(int n, bool e = false, bool d = true) {
    for (int i = 0; i < n; i++) {
        if (d) { cout << "."; }
        nanosleep(&unit, NULL);
    }
    if (e) { cout << "!"; }
}
int main() {
    string my_favorite;
    cout << unitbuf;
    cout << "Input the favorite fruit: ";
    getline(cin, my_favorite);
    cout << "\nMy favorite fruit is";
    w(9);
    cout << " " << my_favorite;
    w(3, true);
    cout << "\n\n";
    return 0;
}
