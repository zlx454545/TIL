#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int n;
vector<int> arr[100001];
int path[100001];
int parent[100001];
bool check[100001];

int main()
{
	cin >> n;
	for (int i = 0; i < n - 1; i++) {
		int u, v;
		cin >> u >> v;

		arr[u].push_back(v);
		arr[v].push_back(u);
	}

	for (int i = 1; i <= n; i++) {
		cin >> path[i];
	}

	queue<int> q;
	q.push(1);
	check[1] = true;


	int start = 2;
	while (!q.empty())
	{
		int now = q.front();
		q.pop();

		int count = 0;

		for(auto next : arr[now]) {
			if (!check[next]) {
				parent[next] = now;
				count++;
			}
		}

		for (int i = 0; i < count; i++) {
			if (parent[path[start + i]] != now) {
				cout << 0;
				return 0;
			}
			q.push(path[start+i]);
			check[path[start+i]] = true;
		}

		start += count;

		
	}

	cout << 1;

}
