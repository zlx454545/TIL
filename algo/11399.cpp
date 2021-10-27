#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


vector<int> v;

int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);

	int n;
	int ans = 0;
	cin >> n;

	for (int i = 0; i < n; i++) {
		int x;
		cin >> x;
		v.push_back(x);
	}

	sort(v.begin(), v.end());
	
	int before = 0;
	int now = 0;

	for (int i = 0; i < n; i++) {
		now = before + v[i];
		ans += now;
		before = now;
	}


	/*
	1 = 1
	1+2 = 3
	1+2+3 = 6
	1+2+3+3 = 9
	1+2+3+3+4 = 13
	*/
	

	cout << ans;
}
