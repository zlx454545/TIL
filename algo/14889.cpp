#include <iostream>
#include <vector>
using namespace std;

int arr[22][22];
int n;
int ans = 987654321;


int main()
{
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> arr[i][j];
		}
	}


	for (int i = 0; i < (1<<n); i++) {
		vector<int> team1, team2;
		for (int j = 0; j < n; j++) {
			if (i & (1 << j)) {
				team1.push_back(j);
			}
			else {
				team2.push_back(j);
			}
		}

		if (team1.size() != n / 2) {
			continue;
		}

		int t1 = 0;
		int t2 = 0;
		for (int k = 0; k < n/2; k++) {
			for (int l = 0; l < n / 2; l++) {
				t1 += arr[team1[k]][team1[l]];
				t2 += arr[team2[k]][team2[l]];
			}
		}

		ans = ans > abs(t1 - t2) ? abs(t1 - t2) : ans;
	}

	cout << ans;
}