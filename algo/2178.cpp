#include <iostream>
#include <queue>

using namespace std;
int arr[100][100];
int dist[100][100];
bool check[100][100];
int n, m;
int x[4] = { -1,0,1,0 };
int y[4] = { 0,1,0,-1 };


int main()
{
	cin >> n >> m;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			scanf_s("%1d", &arr[i][j]);
		}
	}

	queue<pair<int, int>> q;
	q.push({ 0,0 });
	check[0][0] = true;
	dist[0][0] = 1;

	while (!q.empty())
	{
		int row = q.front().first;
		int col = q.front().second;
		q.pop();

		for (int i = 0; i < 4; i++) {
			int nrow = row + y[i];
			int ncol = col + x[i];
			if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m) {
				if (check[nrow][ncol] == false && arr[nrow][ncol] == 1) {
					q.push({ nrow, ncol });
					check[nrow][ncol] = true;
					dist[nrow][ncol] = dist[row][col] + 1;
				}
			}
		}
	}

	cout << dist[n - 1][m - 1];
}