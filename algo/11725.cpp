#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

vector<int> arr[100001];
int parent[100001];
int n;


void preorder(int node, int _parent) {
	parent[node] = _parent;
	for (int i = 0; i < arr[node].size(); i++) {
		if(parent[arr[node][i]] == -1)
		preorder(arr[node][i], node);
	}
}


int main()
{
	memset(parent, -1, sizeof(parent));

	cin >> n;
	for (int i = 0; i < n - 1; i++) {
		int u, v;
		cin >> u >> v;
		arr[u].push_back(v);
		arr[v].push_back(u);
	}


	preorder(1, 0);
	
	for (int i = 2; i <= n; i++) {
		cout << parent[i] << '\n';
	}

}