#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> arr[3001];
int check[3001];
int dist[3001];
int n;

int dfs(int now, int b) {
	if (check[now] == 1) {
		return now;
	}

	check[now] = 1;
	for (auto next : arr[now]) {
		if (next == b) continue;
		int res = dfs(next, now);
		if (res >= 0) {
			check[now] = 2;
			if (res == now) return -2;
			else return res;
		}
		if (res == -2) {
			return -2;
		}
	}

	return -1;
}

int main()
{
	cin >> n;
	for (int i = 0; i < n; i++) {
		int u, v;
		cin >> u >> v;
		arr[u].push_back(v);
		arr[v].push_back(u);
	}

	dfs(1, 0);
	
	queue<int> q;
	for (int i = 1; i <= n; i++) {
		if (check[i] == 2) {
			q.push(i);
			dist[i] = 0;
		}
		else {
			dist[i] = -1;
		}
	}

	while (!q.empty())
	{
		int now = q.front();
		q.pop();

		for (auto x : arr[now]) {
			if (dist[x] == -1) {
				q.push(x);
				dist[x] = dist[now] + 1;
			}
		}
	}

	for (int i = 1; i <= n; i++) {
		cout << dist[i] << " ";
	}
	
}