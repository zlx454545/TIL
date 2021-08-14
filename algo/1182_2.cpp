#include <iostream>
#include <string>
using namespace std;

int n;
int s;
int arr[21];
int ans = 0;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	
	cin >> n;
	cin >> s;

	for (int i = 0; i < n; i++) {
		cin >> arr[i];
	}

	for (int i = 1; i < (1 << n) ; i++) {
		int sum = 0;
		for (int j = 0; j <  n; j ++ ) {
			if (i & (1 << j)) {
				sum += arr[j];
			}
		}
		if (sum == s) {
			ans++;
		}
	}

	cout << ans;
}

