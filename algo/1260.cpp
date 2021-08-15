#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

vector<int> a[1001];
int n;
int m;
int v;
bool checkDfs[1001];
bool checkBfs[1001];

void dfs(int node) {
	checkDfs[node] = true;
	cout << node << " ";
	for (auto next : a[node]) {
		if (!checkDfs[next]) {
			dfs(next);
		}
	}
}

void bfs(int start) {
	queue<int> q;
	q.push(start);
	checkBfs[start] = true;
	while (!q.empty())
	{
		int node = q.front();
		q.pop();
		cout << node << " ";
		for (auto next : a[node]) {
			if (!checkBfs[next]) {
				q.push(next);
				checkBfs[next] = true;
			}
		}
	}
}

int main()
{
	cin >> n >> m >> v;
	for (int i = 0; i < m; i++) {
		int from, to;
		cin >> from >> to;
		a[from].push_back(to);
		a[to].push_back(from);
	}

	for (int i = 1; i <= n; i++) {
		sort(a[i].begin(), a[i].end());
	}

	dfs(v);
	cout << "\n";
	bfs(v);
}