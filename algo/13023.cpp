#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool a[2000][2000]; //인접행렬
vector<int> g[2000]; //인접리스트
vector<pair<int, int>> edges; // 간선리스트

int main()
{
	int n, m; // n은 사람 수 m은 관계의 수
	cin >> n >> m; // 입력 받음(문제에서 주어진 입력)
	for (int i = 0; i < m; i++) { // 역시나 입력받기 위한 포문
		int from, to; // 방향을 넣어주는거지
		cin >> from >> to; // 입력받고
		edges.push_back({ from, to }); // 간선리스트에 넣어줌
		edges.push_back({ to, from }); // 간선리스트도 양방향으로 해야 
										//	각 노드별 아웃 차수를 알 수 있기 때문에 둘다 넣는거임
		a[from][to] = a[to][from] = true; // 인접행렬에도 값을 넣어줌 이 역시 방향있게!
		g[from].push_back(to); //인접리스트에도 넣어주는거지
		g[to].push_back(from); //이 역시 각 노드별로 연결된거 다 넣어줄려고!
	}

	m *= 2; // why? 무방향에서 방향으로 바꿨잖아

	for (int i = 0; i < m; i++) {
		for (int j = 0; j < m; j++) {
			// A->B
			int A = edges[i].first;
			int B = edges[i].second;

			// B->C
			int C = edges[j].first;
			int D = edges[j].second;

			if (A == B || A == C || A == D || B == C || B == D || C==D) {
				continue;
			}

			if (!a[B][C]) {
				continue;
			}

			for (auto E : g[D]) {
				if (E != A && E != B && E != C && E != D) {
					cout << 1;
					return 0;
				}
			}


		}
	}

	cout << 0;
	return 0;
}