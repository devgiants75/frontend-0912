//! 배열의 고급 메소드

let cars = ['audi', 'bmw', 'hyundai', 'volvo'];
//! 1. 반복 메소드
// forEach: 배열의 각 요소에 대해 함수를 실행
cars.forEach(car => {
  console.log(car);
})
// map: 배열의 각 요소에 대해 함수를 적용하고 새로운 배열을 생성
// >> 각 차량의 브랜드 이름을 대문자로 변환
// 문자열데이터.toUpperCase()
let carsInUpperCase = cars.map(car => car.toUpperCase());
console.log(carsInUpperCase);

// filter: 특정 조건을 만족하는 요소만 추출하여 새 배열 생성
// >> 이름 길이가 4자를 초과하는 차량 브랜드를 필터링
// 문자열데이터.length: 문자열의 길이를 반환
let longNameCars = cars.filter(car => car.length > 4);
console.log(longNameCars);

// reduce: 배열의 각 요소에 대해 함수를 적용하여 단일 값 생성
// 배열명.reduce((accumulator, currentValue, currentIndex, array) => {
  // 함수 로직
// }, initialValue);

// accumulator: 이전 리듀서의 호출의 반환 값
// : 첫 번째 호출에서는 initialValue이 지정
// : 각 호출에서 축적되는 값
// currentValue: 현재 처리 중인 배열의 요소

// currentIndex: (선택) 현재 처리중인 배열 요소의 인덱스
// array: (선택) reduce가 호출된 배열
// initialValue: (선택) 작성을 하지 않을 경우 배열의 첫 번째 요소가 초기값으로 지정

// 배열의 모든 숫자를 더하는 합계 계산
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// 0 + 1
// 1 + 2
// 3 + 3
// 6 + 4

// reduce함수를 사용하여 모든 차량 브랜드 이름을 연결
// 데이터 사이에는 ', '
// let cars = ['audi', 'bmw', 'hyundai', 'volvo'];
let combinedCarNames = cars.reduce((accumulator, currentValue) => accumulator + ', ' + currentValue);

console.log(combinedCarNames);
// audi, bmw, hyundai, volvo

//! 배열 요소의 정렬과 순서 변경
// 1. sort(compareFunction)
// : 배열 요소를 정렬
// compareFunction
// - 값이 생략될 경우, 배열의 요소들은 문자열로 취급, 유니코드 값 순서대로 정렬
// 해당 함수가 리턴하는 값이
// - 0보다 작을 경우: a가 b보다 앞에 오도록 정렬
// - 0보다 클 경우: b가 a보다 앞에 오도록 정렬
// - 0일 경우: 순서 변경 X

numbers = [3, 1, 4, 1, 5, 9];
// 오름차순 정렬(숫자가 작은 값이 먼저 작성)
numbers.sort((a, b) => {
  if (a > b) return 1; // a가 더 큰 경우 b가 우선
  if (a === b) return 0;
  if (a < b) return -1; // a가 더 작은 경우 a가 우선
});
console.log(numbers);

// 두 숫자 a, b의 차(a - b)가 양수값인 경우
// : b가 우선
// 음수값인 경우
// : a가 우선
numbers = [3, 1, 4, 1, 5, 9];
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

// 2. reverse()
// : 배열의 요소 순서를 반대로 뒤집음.
numbers.reverse();
console.log(numbers); // 배열 순서 뒤집기

//! 배열 요소의 검색 및 평가
let fruits = ['apple', 'banana', 'cherry', 'apple'];
//? 1. indexOf, lastIndexOf
// : 특정 요소의 인덱스를 찾는 메소드
let firstApple = fruits.indexOf('apple');
let lastApple = fruits.lastIndexOf('apple');
console.log(firstApple); // 0
console.log(lastApple); // 3

//? 2. find, findIndex
// : 조건을 만족하는 요소나 해당 인덱스를 찾는 메소드
numbers = [5, 4, 3, 6, 1];
let firstOverFive = numbers.find(num => num > 5);
let firstIndexOverFive = numbers.findIndex(num => num > 5);
console.log(firstOverFive); // 6
console.log(firstIndexOverFive); // 3

//? 3. toString, toLocaleString(지역 설정에 맞는 문자열로 변환-날짜)
// : 배열을 문자열로 변환
let numberString = numbers.toString();
let numberLocaleString = numbers.toLocaleString();
console.log(typeof numberString);
console.log(numberLocaleString);

