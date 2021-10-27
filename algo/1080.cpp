#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


vector<int> v[52];
vector<int> v2[52];

int main()
{
	int n, m;
	cin >> n >> m;

	int ans = 0;

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			int temp;
			scanf("%1d", &temp);
			v[i].push_back(temp);
		}
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			int temp;
			scanf("%1d", &temp);
			v2[i].push_back(temp);
		}
	}


	for (int i = 0; i < n-2; i++) {
		for (int j = 0; j < m-2; j++) {
			if (!(v[i][j] == v2[i][j])) {

				++ans;

				for (int k = 0; k < 3; k++) {
					for (int l = 0; l < 3; l++) {
						v[i+k][j+l] = (v[i+k][j+l] == 0 ? 1 : 0);
					}
				}
			}
		}
	}

	bool flag = true;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (!(v[i][j] == v2[i][j])) {
				flag = false;
			}
		}

	}

	cout << (flag ? ans : -1);
	
}
