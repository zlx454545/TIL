#include <iostream>
using namespace std;

int n;
int s[11][11];
int ans[13];
bool finish = false;


bool check( int idx) {
    int sum = 0;
    for (int i = idx; i >= 0; i--) {
        sum += ans[i];
        if (s[i][idx] == 0) {
            if (sum != 0) return false;
        }
        else if (s[i][idx] < 0) {
            if (sum >= 0) return false;
        }
        else if (s[i][idx] > 0) {
            if (sum <= 0) return false;
        }
    }
    return true;
}



bool recursion(int index) {
    if (index == n) {
        return true;
    }
    if (s[index][index] == 0) {
        ans[index] = 0;
        return check(index) && recursion(index + 1);
    }
    for (int i = 1; i <= 10; i++) {
        ans[index] = s[index][index] * i;
        if (check(index) && recursion(index + 1)) return true;
    }
    return false;
}

int main()
{
    cin >> n;
    for (int i = 0; i <n; i++) {
        for (int j = i; j < n; j++) {
            char c;
            cin >> c;
            if (c == '+') {
                s[i][j] = 1;
            }
            else if (c == '-') {
                s[i][j] = -1;
            }
            else {
                s[i][j] = 0;
            }
        }
    }

   
    recursion(0);

    for (int i = 0; i < n; i++) {
        cout << ans[i] << " ";
    }
}

