#include <iostream>
#include <queue>

using namespace std;

int arr[1000][1000];
int dist[1000][1000];
int m, n; //n-i m-j 

int x[4] = { -1,0,1,0 };
int y[4] = { 0,1,0,-1 };



int main()
{

	queue<pair<int, int>> q;
	cin >> m >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> arr[i][j];
			dist[i][j] = -1;
			if(arr[i][j] == 1) {
				q.push({ i,j });
				dist[i][j] = 0;
			}
		}
	}

	while (!q.empty())
	{
		int row = q.front().first;
		int col = q.front().second;
		q.pop();

		for (int i = 0; i < 4; i++) {
			int nrow = row + y[i];
			int ncol = col + x[i];
			if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m) {
				if (arr[nrow][ncol] == 0 && dist[nrow][ncol] == -1) {
					q.push({ nrow,ncol });
					dist[nrow][ncol] = dist[row][col] + 1;
				}
			}
		}
	}

	int ans = 0;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (arr[i][j] != -1 && dist[i][j] == -1) {
				cout << -1;
				return 0;
			}
			ans = ans < dist[i][j] ? dist[i][j] : ans;
		}
	}

	cout << ans;

}