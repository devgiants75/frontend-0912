/*
  ! 자료형(Data Type)
    : 기본 자료형(string, number, boolean, null & undefined)
    : 자료형 검사
    : 자료형 변환
*/

// ! 기본 자료형
//   : 컴퓨터가 처리할 수 있는 자료의 형태

// typeof 변수명: 자료형을 알 수 있는 함수

// ? 1. 숫자형 (number)
let num = 10;
let float = 10.5;

console.log(typeof num);
console.log(typeof float);

// ? 2. 문자형 (string)
// : 텍스트 데이터를 나타내는 타입
// : 작은 따옴표('') | 큰 따옴표("") | 백틱 (``)으로 둘러싸서 표현

let str1 = 'hello';
let str2 = "world";
let str3 = `hello, world`;

// 템플릿 문자열
// : 백틱을 사용하여 정의, 문자열 내에서 변수나 표현식을 `${}` 안에 넣어 사용할 수 있도록 하는 문자열

// 변수 삽입
let name = "이승아";
let greeting = `안녕하세요 ${name}님`;
console.log(greeting);

// 표현식 삽입
let num1 = 10;
let num2 = 20;
console.log(`num1 + num2 = ${num1 + num2}`);

// 여러 줄 문자열
// : 템플릿 문자열의 경우 여러 줄의 문자열 작성 가능
let multiLine = `이것은 여러 줄 문자열입니다.
두 번째 줄입니다.
세 번째 줄입니다.`;
console.log(multiLine);

//? 논리형 (Boolean)
// : 참(true) | 거짓(false) 값만을 가지는 자료형

let bool = 100 < 10; // 자료형: boolean

console.log(bool); // false
console.log(typeof bool); // boolean

bool = true;
console.log(bool);

//? null & undefined 자료형

// null
// : 값이 없을을 명시적으로 나타냄
// (변수에 할당된) 데이터의 값이 유효하지 않은 상태

console.log(null);

// undefined
// : 값이 할당되지 않은 변수의 기본값

let hello;
console.log(hello); // undefined

//? 자료형 변환