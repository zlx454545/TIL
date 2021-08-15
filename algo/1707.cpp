#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

int k, v, e;
vector<int> g[20001];
int check[20001];


void dfs(int node, int num) {
	check[node] = num;
	for (auto next : g[node]) {
		if (check[next] == 0) {
			dfs(next, 3 - num);
		}
	}
}


int main()
{
	cin >> k;

	for (int i = 0; i < k; i++) {
		cin >> v >> e;

		for (int i2 = 1; i2 <= v; i2++) {
			g[i2].clear();
			check[i2] = 0;
		}

		for (int j = 0; j < e; j++) {
			int a, b;
			cin >> a >> b;
			g[a].push_back(b);
			g[b].push_back(a);
		}

		for (int i2 = 1; i2 <= v; i2++) {
			if (check[i2] == 0) {
				dfs(i2, 1);
			}
		}

		bool ok = true;
		for (int l = 1; l <= v; l++) {
			for (auto to: g[l]) {
				if (check[to] ==  check[l]) {
					ok = false;
				}
			}
		}
		cout << (ok ? "YES" : "NO") << '\n';

	}
}