#include <iostream>
#include <string>
using namespace std;




int main()
{
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	int m;
	int jiphap = 0;
	// 000000000 여기서 각각이 flag역할을 하는거임
	cin >> m;
	for (int i = 0; i < m; i++) {
		string cmd;
		cin >> cmd;
		if (cmd.compare("add") == 0) {
			int a;
			cin >> a;
			jiphap = jiphap | (1<<a);
		}
		else if (cmd.compare("remove") == 0) {
			int a;
			cin >> a;
			jiphap = jiphap & (~(1 << a));
		}
		else if (cmd.compare("check") == 0) {
			int a;
			cin >> a;
			int temp = jiphap & (1 << a);
			if (temp == 0) {
				cout << 0 << '\n';
			}
			else {
				cout << 1 << '\n';
			}
		}
		else if (cmd.compare("toggle") == 0) {
			int a;
			cin >> a;
			jiphap = jiphap ^ (1 << a);
		}
		else if (cmd.compare("all") == 0) {
			jiphap = (1 << 21) - 1;
		}
		else if (cmd.compare("empty") == 0) {
			jiphap = 0;
		}
		else {
			cout << "error";
		}
	}
}

