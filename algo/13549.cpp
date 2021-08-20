#include <iostream>
#include <vector>
#include <queue>
#include <cstring>

using namespace std;

int check[100001];
int n;
int k;

int main()
{
	cin >> n >> k;

	deque<int> deq;
	deq.push_back(n);
	memset(check, -1, sizeof(check));
	check[n] = 0;

	while (!deq.empty())
	{
		int now = deq.front();
		deq.pop_front();

		if (now * 2 <= 100000 && check[now*2] == -1) {
			deq.push_front(now * 2);
			check[now * 2] = check[now];
		}

		if (now + 1 <= 100000 && check[now + 1] == -1) {
			deq.push_back(now + 1);
			check[now + 1] = check[now] + 1;
		}

		if (now - 1 >= 0 && check[now - 1] == -1) {
			deq.push_back(now - 1);
			check[now - 1] = check[now] + 1;
		}
	}

	cout << check[k];
}