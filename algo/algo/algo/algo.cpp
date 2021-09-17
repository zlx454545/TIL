#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

vector<pair<int, int>> v;

int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);

	int n;
	cin >> n;

	while (n--)
	{
		int x, y;
		cin >> x >> y;
		v.push_back({ x,y });
	}

	sort(v.begin(), v.end());
    
	for (auto p : v) {
		cout << p.first << " " << p.second << "\n";
	}
}
