#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

vector<int> v;

int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);

    int n;
    cin >> n;
	while (n--)
	{
		int x;
		cin >> x;
		v.push_back(x);
	}

	sort(v.begin(), v.end());

	for (auto a : v) {
		cout << a << "\n";
	}
}
