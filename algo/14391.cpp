#include <iostream>
#include <cstdio>

using namespace std;


int arr[5][5];
int row; // 행 몇개
int col; // 열 몇개
int ans = -1;

int main()
{
	cin >> row >> col;

	for (int i = 0; i < row; i++) {
		for (int j = 0; j < col; j++) {
			scanf("%1d", &arr[i][j]);
		}
	}


	for (int i = 0; i < (1 << (row * col)); i++) {
		int sum = 0;

		//가로 처리
		for (int j = 0; j < row; j++) {
			//가로 한줄당
			int cur = 0;
			for (int k = 0; k < col; k++) {
				int l = j * col + k;
				if ((i & (1<<l)) == 0) {
					cur = cur * 10 + arr[j][k];
				}
				else {
					sum += cur;
					cur = 0;
				}
			}
			sum += cur;
		}

		//세로 처리
		for (int k = 0; k < col; k++) {
			// 세로 한줄당
			int cur = 0;
			for (int j = 0; j < row; j++) {
				int l = j * col + k;
				if ((i & (1 << l)) != 0) {
					cur = cur * 10 + arr[j][k];
				}
				else {
					sum += cur;
					cur = 0;
				}
			}
			sum += cur;
		}

		ans = max(ans, sum);
	}
	cout << ans;
}