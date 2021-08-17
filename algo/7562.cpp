#include <iostream>
#include <queue>

using namespace std;


int arr[300][300];
bool check[300][300];
int x[8] = { -2,-1,1,2,2,1,-1,-2 };
int y[8] = { 1,2,2,1,-1,-2,-2,-1 };


int main()
{
	int t;
	cin >> t;

	while (t--)
	{
		

		int l;
		cin >> l;
		for (int i = 0; i < l; i++) {
			for (int j = 0; j < l; j++) {
				arr[i][j] = 0;
				check[i][j] = false;
			}
		}


		int srow, scol;
		cin >> srow >> scol;
		arr[srow][scol] = 0;


		int drow, dcol;
		cin >> drow >> dcol;

		
		queue<pair<int, int>> q;
		q.push({ srow,scol });
		check[srow][scol] = true;

		while (!q.empty())
		{
			int row = q.front().first;
			int col = q.front().second;
			q.pop();

			if (row == drow && col == dcol) {
				break;
			}

			for (int i = 0; i < 8; i++) {
				int nrow = row + y[i];
				int ncol = col + x[i];
				if (nrow >= 0 && nrow < l && ncol >= 0 && ncol < l) {
					if (check[nrow][ncol] == false) {
						q.push({ nrow,ncol });
						check[nrow][ncol] = true;
						arr[nrow][ncol] = arr[row][col] + 1;
					}
				}
			}

		}

		cout << arr[drow][dcol] << '\n';

	}
	

}