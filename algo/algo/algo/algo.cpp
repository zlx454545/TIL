#include <iostream>
#include <vector>
using namespace std;





int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);

	int n; // 동전 종류
	int k; // 동전 총합
	vector<int> v;
	int ans = 0;

	cin >> n >> k;

	for (int i = 0; i < n; i++) {
		int temp;
		cin >> temp;
		v.push_back(temp);
	}

	for (int i = v.size() - 1; i >= 0; i--) {
		ans += k / v[i];
		k = k % v[i];
	}

	cout << ans;
}
