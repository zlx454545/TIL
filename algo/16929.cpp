#include <iostream>
using namespace std;

char arr[50][50];
bool check[50][50];
int dx[4] = { -1,0,1,0 };
int dy[4] = { 0,1,0,-1 };
int n, m;


bool dfs(int row, int col, int brow, int bcol, char color) {
	if (check[row][col]) {
		return true;
	}

	check[row][col] = true;

	for (int i = 0; i < 4; i++) {
		int nrow = row + dy[i];
		int ncol = col + dx[i];
		if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m) {
			if (brow != nrow || bcol != ncol) {
				if (arr[nrow][ncol] == color) {
					if (dfs(nrow, ncol, row, col, color)) {
						return true;
					}
				}
			}
		}
	}

	return false;
}


int main()
{
	cin >> n >> m;

	
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (check[i][j]) {
				continue;
			}
			bool flag = dfs(i, j, -1, -1, arr[i][j]);
			if (flag) {
				cout << "Yes";
				return 0;
			}
		}
	}

	cout << "No";
}