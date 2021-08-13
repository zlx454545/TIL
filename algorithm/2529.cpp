#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int numOfBu; // 부등호 갯수
int numOfNum; // 숫자 갯수
char Bu[11]; // 맨첨에 입력한 부등호들
bool isUsed[11]; // 사용된 숫자인지 체크
bool first = true;
string min = "";
vector<string> list;

void recursive(int idx, string answer ) {

	if ((idx == numOfNum) ) {
		list.push_back(answer);
		return;
	}
	

	for (int i = 0; i < 10; i++) {
		if (isUsed[i])
			continue;
		if (idx >= 1 && (Bu[idx - 1] == '>' && answer[idx - 1] < i + '0'))
			continue;
		if (idx >= 1 && (Bu[idx - 1] == '<' && answer[idx - 1] > i + '0'))
			continue;
		answer[idx] = i;
		isUsed[i] = true;
		recursive(idx + 1, answer+to_string(i));
		isUsed[i] = false;
	}
}


int main()
{
	cin >> numOfBu;
	numOfNum = numOfBu + 1;
	for (int i = 0; i < numOfBu; i++) {
		cin >> Bu[i];
	}

	recursive(0,"");
	auto p = minmax_element(list.begin(), list.end());
	cout << *p.second << '\n';
	cout << *p.first;

}