export {};

//! 배열의 다양한 반복 방법
let arr = [1, 2, 3, 4, 5];

//? 1. for문(루프)
// 장점: 간단함, 인덱스가 필요한 경우에 적합
// 단점: 중첩하여 사용하는 경우 코드가 복잡

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//? 2. forEach 메소드
// : 배열의 각 요소에 대해 실행할 함수를 인자로 받는 콜백함수
// : 배열의 모든 요소에 대해 동일한 작업을 수행해야 하는 경우 사용

// 장점: 간결함, 배열의 각 요소에 대해 처음부터 끝까지 접근이 용이
// 단점: 중간에 반복을 중단할 수 X
arr.forEach(item => {
  console.log(item);
})

//? 3. map 메소드
// : 배열의 각 요소를 변환하여 새로운 배열을 생성
// : 데이터를 변환할 때 사용, 단순한 반복 사용 X
let doubled = arr.map(item => item * 2);
console.log(doubled);

//? 4. for...of 루프
// : ES6 도입된 방법, 배열의 각 요소에 접근 가능
// : 코드가 간단함, 배열의 각 요소를 순차적으로 접근
// : 일반 for문과의 차이점 - 배열의 인덱스에 접근할 수 X
for(let num of arr) {
  console.log(num);
}

// 일반적인 for문과 동일하게 배열의 요소를 각각 하나씩 뽑아옴.
// let arr = [1, 2, 3, 4, 5];
let object = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5
}
//? for...in 루프
// : 객체의 모든 열거 가능한 속성을 순회
// : 배열 뿐만 아니라 '객체'에서도 사용 가능

for (let num in arr) {
  console.log(num); // 배열의 인덱스를 순회
}

type Student = {
  name: string,
  height: number,
  job: string,
  [key: string]: string | number; // 인덱스 시그니처
}

let student: Student = {
  name: 'lsa',
  height: 169,
  job: "developer"
};

for (let key in student) {
  // hasOwnProperty(): 객체가 해당 속성을 직접 소유하고 있는지 확인
  if (student.hasOwnProperty(key)) {
    console.log(`${key}: ${student[key]}`);
  }
}
