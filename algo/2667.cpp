#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

int dan = 0;
int arr[30][30];
int check[30][30];
int n;
int drow[4] = { -1,0,1,0 };
int dcol[4] = { 0,1,0,-1 };
int ans[900];

void dfs(int row, int col, int d) {
	
	check[row][col] = d;
	ans[d] += 1;

	for (int i = 0; i < 4; i++) {
		int nextRow = row + drow[i];
		int nextCol = col + dcol[i];
		if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
			if (check[nextRow][nextCol] == 0 && arr[nextRow][nextCol] == 1) {
				dfs(nextRow, nextCol, d);
			}
		}
	}
}

int main()
{
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			scanf("%1d", &arr[i][j]);
		}
	}
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (arr[i][j] == 1 && check[i][j] == 0) {
				dfs(i, j, ++dan);
			}
		}
	}

	cout << dan << "\n";
	sort(ans + 1, ans + 1 + dan);
	for (int i = 1; i <= dan; i++) {
		cout << ans[i] << "\n";
	}
}