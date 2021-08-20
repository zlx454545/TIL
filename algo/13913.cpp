#include <iostream>
#include <vector>
#include <queue>
#include <stack>
using namespace std;

int n, k;
vector<pair<int,int>> dist(100001); // first가 원래 값 second가 이전 노드 번호
bool check[100001];



int main()
{
	cin >> n >> k;

	queue<int> q;
	q.push(n);
	check[n] = true;

	while (!q.empty())
	{
		int now = q.front();
		q.pop();

		int next;
		next = now - 1;
		if (next >= 0 && !check[next]) {
			q.push(next);
			check[next] = true;
			dist[next].first = dist[now].first + 1;
			dist[next].second = now;
		}
		if (next == k) {
			break;
		}


		next = now + 1;
		if (next < 100001 && !check[next]) {
			q.push(next);
			check[next] = true;
			dist[next].first = dist[now].first + 1;
			dist[next].second = now;
		}
		if (next == k) {
			break;
		}

		next = now * 2;
		
		if (next < 100001 && !check[next]) {
			q.push(next);
			check[next] = true;
			dist[next].first = dist[now].first + 1;
			dist[next].second = now;
		}
		if (next == k) {
			break;
		}
	}

	int ans = dist[k].first;
	int before = dist[k].second;

	cout << ans << '\n';

	stack<int> st;
	st.push(k);
	for (int i = 0; i < ans; i++) {
		st.push(before);
		before = dist[before].second;
	}

	for (int i = 0; i <= ans; i++) {
		cout << st.top() << " ";
		st.pop();
	}
}