#include <iostream>
#include <vector>
#include <algorithm>
#include <cstring>
#include <queue>
using namespace std;

class Edge {
public:
	int to;
	int cost;

	Edge(int _to, int _cost) {
		to = _to;
		cost = _cost;
	}
};

vector<Edge> arr[100001];
bool check[100001];
int dist[100001];
int n;


void bfs(int node) {
	memset(dist, 0, sizeof(dist));
	memset(check, false, sizeof(check));

	queue<int> q;
	q.push(node);
	check[node] = true;
	
	while (!q.empty()) {
		int now = q.front();
		q.pop();
		for (auto x : arr[now]) {
			if (!check[x.to]) {
				q.push(x.to);
				dist[x.to] = x.cost + dist[now];
				check[x.to] = true;
			}
		}
	}

}

int main()
{
	cin >> n;
	for (int i = 0; i < n; i++) {
		int v;
		cin >> v;
		while (true)
		{
			int u;
			int dist;
			cin >> u;
			if (u == -1) {
				break;
			}
			cin >> dist;
			arr[v].push_back(Edge(u,dist));
		}
	}

	bfs(1);

	int firstResult = 1;
	for (int i = 2; i <= n; i++) {
		firstResult = dist[i] > dist[firstResult] ? i : firstResult;
	}

	bfs(firstResult);
	int ans = 0;
	for (int i = 1; i <= n; i++) {
		ans = dist[i] > ans ? dist[i] : ans;
	}

	cout << ans;
}