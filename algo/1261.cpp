#include <iostream>
#include <vector>
#include <queue>
#include <cstring>

using namespace std;

int n, m;
int arr[100][100];
int check[100][100];

int dx[4] = { -1,0,1,0 };
int dy[4] = { 0,1,0,-1 };

int main()
{
	cin >> m >> n;

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			scanf_s("%1d", &arr[i][j]);
		}
	}

	memset(check, -1, sizeof(check));

	deque<pair<int, int>> q;

	q.push_back({ 0,0 });
	check[0][0] = 0;

	while (!q.empty())
	{
		int row = q.front().first;
		int col = q.front().second;
		q.pop_front();

		for (int i = 0; i < 4; i++) {
			int nrow = row + dy[i];
			int ncol = col + dx[i];
			if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m) {
				if (check[nrow][ncol] == -1) {
					if (arr[nrow][ncol] == 1) {
						q.push_back({ nrow,ncol });
						check[nrow][ncol] = check[row][col] + 1;
					}
					else {
						q.push_front({ nrow, ncol });
						check[nrow][ncol] = check[row][col];
					}

					
				}
			}
		}

	}

	cout << check[n-1][m-1];

}