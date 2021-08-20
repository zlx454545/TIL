#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <cstring>
using namespace std;

int d[1001][1001];

int main()
{
	int n; // 최종 이모티콘 갯수
	cin >> n;

	memset(d, -1, sizeof(d)); // 다 -1로 초기화 조쟈부림
	queue<pair<int, int>> q; 
	q.push({ 1,0});

	d[1][0] = 0;

	while (!q.empty())
	{
		int s, c;
		s = q.front().first;
		c = q.front().second;
		q.pop();

		// 화면에 있는 이모티콘 복사해서 클립보드 저장
		if (d[s][s] == -1) {
			q.push({ s,s });
			d[s][s] = d[s][c] + 1;
		}

		// 클립보드에 있는 모든 이모티콘을 화면에 붙여넣기
		if (s + c <= n&&d[s + c][c] == -1  ) {
			q.push({ s + c,c });
			d[s + c][c] = d[s][c] + 1;
		}

		// 화면에 있는 이모티콘 중 하나를 삭제한다
		if (s - 1 >= 0&&d[s - 1][c] == -1  ) {
			q.push({ s - 1,c });
			d[s-1][c] = d[s][c] + 1;
		}
	}

	int ans = 987654321;

	for (int i = 0; i <= n; i++) {
		if (d[n][i] == -1)
			continue;
		ans = ans > d[n][i] ? d[n][i] : ans;
	}

	cout << ans;

}