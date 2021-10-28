#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


vector<int> v1; // 0번째에서 안바꿈
int c1 = 0;
vector<int> v2; // 0번째에서 바꿈
int c2 = 1;
vector<int> target;

int main()
{
	int n;
	int ans = 0;
	cin >> n;

	for (int i = 0; i < n; i++) {
		int temp;
		scanf("%1d", &temp);
		v1.push_back(temp);
		v2.push_back(temp);
	}
	
	for (int i = 0; i < n; i++) {
		int temp;
		scanf("%1d", &temp);
		target.push_back(temp);
	}

	v2[0] = v2[0] == 0 ? 1 : 0;
	v2[1] = v2[1] == 0 ? 1 : 0;


	for (int i = 1; i < n - 1; i++) {
		if (v1[i-1] != target[i-1]) {
			v1[i - 1] = v1[i - 1] == 0 ? 1 : 0;
			v1[i] = v1[i] == 0 ? 1 : 0;
			v1[i + 1] = v1[i + 1] == 0 ? 1 : 0;
			++c1;
		}
		if (v2[i-1] != target[i-1]) {
			v2[i - 1] = v2[i - 1] == 0 ? 1 : 0;
			v2[i] = v2[i] == 0 ? 1 : 0;
			v2[i + 1] = v2[i + 1] == 0 ? 1 : 0;
			++c2;
		}
		
	}

	

	if (v1[n - 2] != target[n - 2]) {
		v1[n - 2] = v1[n - 2] == 0 ? 1 : 0;
		v1[n - 1] = v1[n - 1] == 0 ? 1 : 0;
		++c1;
	}

	if (v2[n - 2] != target[n - 2]) {
		v2[n - 2] = v2[n - 2] == 0 ? 1 : 0;
		v2[n - 1] = v2[n - 1] == 0 ? 1 : 0;
		++c2;
	}

	

	for (int i = 0; i < n; i++) {
		if (v1[i] != target[i]) {
			c1 = 987654321;
		}
		if (v2[i] != target[i]) {
			c2 = 987654321;
		}
	}

	if (c1 == 987654321 && c2 == 987654321) {
		cout << -1;
	}
	else {
		cout << min(c1, c2);
	}

	
	
}
