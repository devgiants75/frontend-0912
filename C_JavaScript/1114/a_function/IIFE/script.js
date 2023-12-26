//! 자바스크립트의 즉시 호출 함수
// : 즉시 실행 함수 표현
// : IIFE (Immediately Invoked Function Expression)

//? IIFE 정의
// : 정의되자마자 즉시 호출(실행)되는 함수
// : 주로 변수의 스코프(범위, 지역)를 제한하여 전역 스코프의 오염을 방지하는 데 사용

//? IIFE의 대표적 형태
// : 익명함수를 생성하고 즉시 호출
// (function() {

// })();

//? 1. 이름 충돌 문제
// : 다른 스크립트나 라이브러리와 변수명이 충돌하는 문제

// Error: 식별자가 이미 사용되고 있음을 나타내는 오류
// let pi = 3.14;
// console.log(`파이의 값은 ${pi}입니다.`);

// >> JS에서는 스코프 충돌을 방지하기 위해서 중괄호를 사용 | 함수를 생성하여 블록을 생성

// 블록을 사용한 스코프 생성
{
  let pi = 3.14;
  console.log(`파이의 값은 ${pi}입니다.`);
}

{
  let pi = 3.14159;
  console.log(`파이의 값은 ${pi}입니다.`);

  { 
    // 섀도잉
    // : 블록이 다른 경우 내부 변수가 외부 변수를 가리는 현상
    let pi = 3.14;
    console.log(`파이의 값은 ${pi}입니다.`); 
  } 
}

// 함수 블록을 사용한 스코프 생성
function sample() {
  let pi = 3.141592;
  console.log(`파이의 값은 ${pi}입니다.`);
}

sample();

// 즉시 호출 함수를 사용한 이름 충돌 문제 해결
{
  let commonVar = '전역 변수';
  console.log(commonVar);

  // 스코프(범위)의 충돌을 방지하기 위해
  // , 함수를 사용하였지만 일반적인 스코프 내의 작성 코드와 동일하게 동작하기 위해 사용
  (function () {
    let commonVar = 'IIFE 내부 변수';
    console.log(commonVar);
  })();

  console.log(commonVar); // '전역 변수'의 값이 유지
}