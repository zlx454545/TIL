#include <iostream>

using namespace std;

int arr[50][50];
bool check[50][50];
int w, h;

int x[8] = {-1,-1,0,1,1,1,0,-1};
int y[8] = {0,1,1,1,0,-1,-1,-1};


void dfs(int row, int col){
	check[row][col] = true;
	for (int i = 0; i < 8; i++) {
		int nrow = row + y[i];
		int ncol = col + x[i];

		if ((nrow >= 0 && nrow < h) && (ncol >= 0 && ncol < w)) {
			if (check[nrow][ncol] == false && arr[nrow][ncol] == 1) {
				dfs(nrow, ncol);
			}
		}
	}
}



int main()
{
	
	while (true)
	{
		cin >> w >> h;
		if (w == 0) {
			break;
		}

		int ans = 0;

		for (int i = 0; i < h; i++) {
			for (int j = 0; j < w; j++) {
				cin >> arr[i][j];
				check[i][j] = false;
			}
		}

		for (int i = 0; i < h; i++) {
			for (int j = 0; j < w; j++) {
				if ((arr[i][j] == 1) && (check[i][j] == false)) {
					dfs(i, j);
					ans += 1;
				}
			}
		}

		cout << ans  << '\n';


	}
}