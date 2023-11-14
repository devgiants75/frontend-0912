//! 익명 함수와 선언적 함수의 차이

// 반복문
// for 반복문: 횟수를 중심으로 또는 배열 등을 중심으로 반복할 때 사용
// while 반복문: 조건을 중심으로 반복할 때

//! 1. 익명 함수의 사용
// : 순차적인 코드 실행에서 코드가 해당 줄을 읽을 때 생성

// 변수 선언
let anonymous;

anonymous = function() {
  console.log('1번 째 익명 함수입니다.');
}

anonymous = function() {
  console.log('2번 째 익명 함수입니다.');
}

// 익명 함수 호출
anonymous();

//! 2. 선언적 함수 사용
// : 순차적인 코드 실행이 일어나기 전에 생성
// : , 같은 불록이면 어디에서든 호출 가능

// 선언적 함수 호출
// 선언적 함수의 경우 호이스팅이 가능
common();

// 선언적 함수 생성
function common() {
  console.log('1번째 선언적 함수 입니다.');
}

function common() {
  console.log('2번째 선언적 함수 입니다.');
}

//! 3. 선언적 함수와 익명 함수의 조합
// 선언적 함수가 먼저 생성, 이후에 순차적인 코드를 진행을 시작하면서 익명 함수를 생성

// 익명 함수 생성
// 코드 작성 순서대로 실행되기 때문에 선언적 함수보다 안정성이 뛰어남
example = function() {
  console.log('익명 함수');
}

// 선언적 함수를 생성하고 할당
function example() {
  console.log('선언적 함수');
}

// 'example'함수 호출
example(); // 익명 함수