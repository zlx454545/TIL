"use strict";
// 0. map, filter, reduce
////// map
const cart = [
  { name: "Widget", price: 9.95 },
  { name: "Gadget", price: 22.95 },
];
const names = cart.map((x) => x.name); // ["Widget", "Gadget"]
const prices = cart.map((x) => x.price); // [9.95, 22.95]
const discountPrices = prices.map((x) => x * 0.8); // [7.96, 18.36]

////// filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
//["exuberant", "destruction", "present"]

////// reduce
// reduce함수 자체의 매개변수
// 첫번째 매개변수는 콜백함수
// 두번째 매개변수는 accumulator의 초기값
// reduce의 콜백함수의 매개변수
// 첫번째 매개변수는 accumulator
// 두번째 매개변수는 element(배열 요소)
// 세번째 매개변수는 index
// 네번째 매개변수는 arr (배열 자체)
const arr12 = [5, 7, 2, 4];
const sum = arr12.reduce((acc, el) => (acc += el), 0); // acc === 18

// 1. 배열 수정 메소드 정리

////// 1-a. 배열 자체 수정

// pop,push 배열 마지막에서
const arr = ["b", "c", "d"];
arr.push("e"); //  ["b", "c", "d", "e"]
arr.pop(); //  ["b", "c", "d"]
// shift,unshift 배열 처음에서
arr.unshift("a"); //  ["a", "b", "c", "d"]
arr.shift(); //  ["b", "c", "d"]

// splice
// 첫번째 매개변수는 수정 시작할 인덱스
// 두번째 매개변수는 제거할 요소 갯수, 제거 안할때는 0
// 나머지 매개변수는 배열에 추가할 요소들
const arr4 = [1, 5, 7];
arr4.splice(1, 0, 2, 3, 4); // [1,2,3,4,5,7]
arr4.splice(5, 0, 6); // [1,2,3,4,5,6,7]
arr4.splice(1, 2); // [1,4,5,6,7]
arr4.splice(2, 1, "a", "b"); // [1,4,'a','b',6,7]

// fill
// 첫번째 매개변수는 채울 값
// 두번째 매개변수는 채우기 시작할 인덱스 [optional]
// 세번째 매개변수는 채우기 마지막 인덱스 [optional]
// 음수는 뒤에서부터 인덱스
const arr5 = new Array(5).fill(1);
arr5.fill(1); // [1,1,1,1,1];
arr5.fill(2, 1); // [1,2,2,2,2];
arr5.fill(3, 2, 4); // [1,2,3,3,2];
arr5.fill(4, -4); // [1,4,4,4,4];
arr5.fill(5, -3, -1); // [1,4,5,5,4];

// reverse
const arr6 = [1, 2, 3, 4, 5];
arr6.reverse(); // [5,4,3,2,1];

// sort
arr6.sort(); // [1,2,3,4,5];
const arr7 = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];
arr7.sort(); // arr7 변하지 않음.
arr7.sort((a, b) => a.name > b.name); // name 알파벳 순으로 정렬

// flat
// 매개변수 depth [optional]
const arr14 = [1, 2, [3, 4]];
arr14.flat(); // [1,2,3,4]
const arr15 = [1, 2, [3, 4, [5, 6]]];
arr15.flat(); // [1,2,3,4,[5,6]]
const arr16 = [1, 2, [3, 4, [5, 6]]];
arr16.flat(2); // [1,2,3,4,5,6]
const arr17 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr17.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// reduce로 flat 구현하기
const arr18 = [1, 2, [3, 4]];
arr18.reduce((acc, el) => acc.concat(el), []);

// concat flat 구현하기
const arr19 = [1, 2, [3, 4]];
const flattened = (arr19) => [].concat(...arr);

////// 1-b. 배열 사본 반환
// concat
// 인자로 들어온 배열을 한번만 분해. 배열 안의 배열은 다시 분해하지 않음.
const arr2 = [1, 2, 3];
arr2.concat(4, 5, 6); // arr는 그대로, [1,2,3,4,5,6]반환
arr2.concat([4, 5, 6]); // arr는 그대로, [1,2,3,4,5,6]반환
arr2.concat([4, 5], 6); // arr는 그대로, [1,2,3,4,5,6]반환
arr2.concat([4, [5, 6]]); // arr는 그대로, [1,2,3,4,[5,6]] 반환

// slice
// 첫번째 매개변수는 어디서부터 가져올지,
// 두번째  매개변수는 어디까지 가져올지 [optional] 생략하면 끝까지
// 음수는 뒤에서 부터 인덱스 계산.
const arr3 = [1, 2, 3, 4, 5];
arr3.slice(3); // arr는 그대로, [4,5] 반환
arr3.slice(2, 4); // arr는 그대로, [3,4] 반환
arr3.slice(-2); // arr는 그대로, [4,5] 반환
arr3.slice(1, -2); // arr는 그대로, [2,3] 반환
arr3.slice(-2, -1); // arr는 그대로, [4] 반환

// 2. 배열 검색 메소드 정리

// indexOf
// 찾지 못할 경우 -1 반환
// 두번째 매개변수로 시작 인덱스 지정가능 [optional]
const o = { name: "park" };
const arr8 = [1, 5, o, [1, 2], "9", 5];
arr8.indexOf(5); // 1
arr8.indexOf(o); // 2
arr8.indexOf({ name: "park" }); // -1
arr8.indexOf([1, 2]); // -1
arr8.indexOf(9); // -1

arr8.indexOf(1, 3); // -1
// lastIndexOf
// 마지막으로 나타난 index 반환

// findInex
// 시작 인덱스 지정 불가능
arr8.findIndex((e) => e.name === "park"); // 2
arr8.findIndex((e) => e === 5); // 1
arr8.findIndex((e) => e.name === "kim"); // -1

// find
// 첫번째 매개변수 콜백함수
// 두번째 매개변수 객체
arr8.find((e) => e.name === "park"); // o반환
arr8.find((e) => e.name === "kim"); // undefined
arr8.find((e) => e.name === this.name, o); // true

// findIndex, find 콜백함수의 매개변수들
// element 배열요소 index 인덱스 arr 배열 자체
const arr9 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr9.find((element, index, arr) => {
  return index > 2 && Number.isInteger(Math.sqrt(element));
}); //4

// some
const arr10 = [5, 7, 12, 15, 17];
arr10.some((x) => x % 2 == 0); // true
arr10.some((x) => Number.isInteger(Math.sqrt(x))); // false

// every
const arr11 = [4, 6, 16, 36];
arr11.every((x) => x % 2 == 0); // true
arr11.every((x) => Number.isInteger(Math.sqrt(x))); // false

// 3. 문자열병합
const arr13 = [1, null, "hello", "world", true, undefined];
delete arr13[3];
arr13.join(); // "1,,hello,,true"
arr13.join(""); // "1hellotrue"
arr13.join(" -- "); // "1 -- -- hello -- -- true -- "
