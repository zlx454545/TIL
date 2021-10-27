#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


vector<pair<int, int>> v;

int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);

	int ans = 0;
	int now = 0;

	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		int start, end;
		cin >> start >> end;
		v.push_back({ end,start });
	}

	sort(v.begin(), v.end());

	

	for (auto x : v) {
		if (x.second >= now) {
			++ans;
			now = x.first;
		}
	}

	cout << ans;
}
