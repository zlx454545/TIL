#include <iostream>

using namespace std;

class Node {
public:
	int left;
	int right;
};
Node arr[50];

int n;

void preorder(int now) {
	if (now == -1) {
		return;
	}
	cout << (char)(now + 'A');
	preorder(arr[now].left);
	preorder(arr[now].right);
}


void inorder(int now) {
	if (now == -1) {
		return;
	}


	inorder(arr[now].left);
	cout << (char)(now + 'A');
	inorder(arr[now].right);
}

void postorder(int now) {
	if (now == -1) {
		return;
	}

	postorder(arr[now].left);
	postorder(arr[now].right);
	cout << (char)(now + 'A');
}

int main()
{
	cin >> n;
	for (int i = 0; i < n; i++) {
		char x, y, z;
		cin >> x >> y >> z;

		x = x - 'A';
		if (y == '.') {
			arr[x].left = -1;
		}
		else {
			arr[x].left = y - 'A';
		}

		if (z == '.'){
			arr[x].right = -1;
		}
		else {
			arr[x].right = z - 'A';
		}
	}

	preorder(0);
	cout << '\n';
	inorder(0);
	cout << '\n';
	postorder(0);
	cout << '\n';
}