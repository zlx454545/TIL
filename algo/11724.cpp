#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

bool check[1001];
vector<int> a[1001];
int n;
int m;
int ans = 0;


void bfs(int start) {
	queue<int> q;
	
	q.push(start);
	check[start] = true;

	while (!q.empty())
	{
		int node = q.front();
		q.pop();
		for (auto next : a[node]) {
			if (!check[next]) {
				q.push(next);
				check[next] = true;
			}
		}
	}

}


void dfs(int node) {
	check[node] = true;
	for (auto next : a[node]) {
		if (!check[next]) {
			dfs(next);
		}
	}
}


int main()
{
	cin >> n >> m;
	for (int i = 0; i < m; i++) {
		int u, v;
		cin >> u >> v;
		a[u].push_back(v);
		a[v].push_back(u);
	}

	for (int i = 1; i <= n; i++) {
		if (!check[i]) {
			dfs(i);
			ans++;
		}
	}

	cout << ans;
}