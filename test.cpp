#include <iostream>
#include <vector>

using namespace std;

vector<string> test;

int main()
{
    for (int i = 0; i < 10000000; ++i) {
        test.push_back("TESTESTESTESTESTSTE");
    }

    return 0;
}
