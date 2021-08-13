#include <iostream>
#include <string>
using namespace std;


int n;
int s;
int num[22];
int ans = 0;



void recursion(int idx, int sum, bool flag) {

	if (idx == n) {
		if (sum == s && flag) {
			ans++;
		}
		return;
	}

	recursion(idx + 1, sum + num[idx], true);
	recursion(idx + 1, sum, flag?true:false);
}


int main()
{
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	

	
	cin >> n >> s;
	for (int i = 0; i < n; i++) {
		cin >> num[i];
	}

	recursion(0, 0, false);
	cout << ans;
}

