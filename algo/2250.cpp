#include <iostream>
#include <vector>
#include <algorithm>
#include <cstring>
using namespace std;

struct Node {
	int left, right; // 왼쪽 자식과 오른쪽 자식
	int order, depth;
};

Node a[10001]; // 노드 최대 개수만큼 넣어준거지
int myL[10001];
int myR[10001];
int cnt[10001]; // 부모 개수
int order = 0;

void inorder(int node, int depth) {
	if (node == -1) return;
	inorder(a[node].left, depth + 1);
	a[node].order = ++order;
	a[node].depth = depth;
	inorder(a[node].right, depth + 1);
}


int main()
{
	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {	// 입력받는거고
		int x, y, z;
		cin >> x >> y >> z;
		a[x].left = y;
		a[x].right = z;
		if (y != -1) cnt[y]++; // 부모개수 세는거
		if (z != -1) cnt[z]++;
	}

	int root = 0;
	for (int i = 1; i <= n; i++) {
		if (cnt[i] == 0) {
			root = i; // 부모가 없으면 루트
		}
	}

	inorder(root, 1);

	int maxdepth = 0;
	for (int i = 1; i <= n; i++) {
		int depth = a[i].depth;
		int order = a[i].order;

		if (myL[depth] == 0) {
			myL[depth] = order;
		}
		else {
			myL[depth] = min(myL[depth], order);
		}

		myR[depth] = max(myR[depth], order);

		maxdepth = max(maxdepth, depth);
	}

	int ansWidth = 0;
	int ansDepth = 0;
	for (int i = 1; i <= maxdepth; i++) {
		if (ansWidth < myR[i] - myL[i] + 1) {
			ansWidth = myR[i] - myL[i] + 1;
			ansDepth = i;
		}
	}

	cout << ansDepth << " " << ansWidth;
}