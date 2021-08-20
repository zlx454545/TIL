#include <iostream>
#include <vector>
#include <queue>
using namespace std;


int n;
int arr[100][100];
int state[100][100];
int dist[100][100];
int dx[4] = { -1,0,1,0 };
int dy[4] = { 0,1,0,-1 };
int ans = 987654321;
queue<pair<int, int>> q;


void dfs(int row, int col, int land) {
	state[row][col] = land;
	q.push({ row,col });
	for (int i = 0; i < 4; i++) {
		int nrow = row + dy[i];
		int ncol = col + dx[i];
		if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < n) {
			if (state[nrow][ncol] == 0 && arr[nrow][ncol] == 1) {
				dfs(nrow, ncol, land);
			}
		}
	}
}

int main()
{
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> arr[i][j];
		}
	}

	int land = 1;

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (state[i][j] == 0 && arr[i][j] == 1) {
				dfs(i, j, land);
				land++;
			}
		}
	}

	while (!q.empty())
	{
		int row = q.front().first;
		int col = q.front().second;
		q.pop();

		for (int i = 0; i < 4; i++) {
			int nrow = row + dy[i];
			int ncol = col + dx[i];
			if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < n) {
				if (state[nrow][ncol] == 0) {
					state[nrow][ncol] = state[row][col];
					q.push({ nrow,ncol });
					dist[nrow][ncol] = dist[row][col] + 1;
				}
			}
		}
	}



	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (dist[i][j] != 0) {
				int row = i;
				int col = j;
				for (int i = 0; i < 4; i++) {
					int nrow = row + dy[i];
					int ncol = col + dx[i];
					if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < n) {
						if (state[nrow][ncol] != state[row][col]) {
							ans = ans > dist[row][col] + dist[nrow][ncol] ? dist[row][col] + dist[nrow][ncol] : ans;
						}
					}
				}
			}

		}
	}

	cout << ans;
}