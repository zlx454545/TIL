#include <iostream>
#include <algorithm>
using namespace std;





void quick_sort(int* arr,int start, int end) {
	if (start >= end) {
		return;
	}

	int pivot = start;
	int left = start + 1;
	int right = end;
	while (left <= right){
		while (left <= end && arr[left] <= arr[pivot]) {
			left += 1;
		}
		while (right > start && arr[right] >= arr[pivot]) {
			right -= 1;
		}
		if (left > right) {
			int temp = arr[pivot];
			arr[pivot] = arr[right];
			arr[right] = temp;
		}
		else {
			int temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
		}
	}

	quick_sort(arr,start, right - 1);
	quick_sort(arr,right + 1, end);
}

int main() {
	

	// 선택정렬 O(n^2)
	/*for (int i = 0; i < 10; i++) {
		for (int j = i + 1; j < 10; j++) {
			if (arr[j] < arr[i]) {
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}*/

	// 삽입정렬 O(N^2) but 대부분 정렬 되어있다면 거의 O(N)
	/*for (int i = 1; i < 10; i++) {
		for (int j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				int temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
			else {
				break;
			}
		}
	}*/

	// 퀵정렬 O(nlogn)
	int arr[10] = { 0,2,1,3,4,5,6,7,8,9 };
	

	quick_sort(arr,0, 9);

	for (int i = 0; i < 10; i++) {
		cout << arr[i] << " ";
	}
}