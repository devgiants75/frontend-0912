//! 자바스크립트 변수
// : 데이터를 저장하는 컨테이너
// : 데이터의 값을 저장하고 해당 값을 변수의 이름으로 사용하거나 수정이 가능

// var
// : 초기 자바스크립트 버전에서 사용
// : 함수 레벨의 스코프
// : 재선언 가능.

// 호이스팅
// : 해당 파일의 변수의 선언부가 최상단으로 옮겨지는 것
console.log(name); // undefined

var name = "이승아";

function reName() {
  var name = "이도경";
  name = "이도경2";
}

console.log(name); // 이승아

// let
// : 블록 레벨 스코프
// : 함수 외에 {}(코드 블록)이 작성되는 영역에서는 그 스코프 가짐
// : 재선언 불가능, 재할당 가능
let age = 28;
{let age = 30;}
age = 32;
console.log(age); // age

var topic = "자바스크립트";
if (topic) {
  var topic = "리액트";
  console.log(topic); // 리액트
}

console.log(topic); // 리액트

let topic2 = "자바스크립트";
if (topic2) {
  let topic2 = "리액트";
  console.log(topic2); // 리액트
}

console.log(topic2); // 자바스크립트

// const
// : 상수를 선언
// : 블록 레벨 스코프 {}
// : 재선언 불가능, 재할당 불가능.

const PI = "3.14";
// PI = "3.41";

// const [name, setName] = useState<string>('');
// name - 변수
// setName - (상태 설정) 함수

// const 키워드를 사용하여 선언된 배열
// : 배열 자체의 참조(즉, 메모리에서의 배열 위치)는 변경할 수 X
// : 배열 내의 요소들은 변경 O
// : const로 선언된 배열 내부의 요소에는 값 할당에 대한 오류 발생 제약이 적용되지 X

// const 변수에 대한 재할당 X
const array = [1, 2, 3];
// array = [4, 5]; - 재할당 불가
array[0] = 10; // - 배열의 요소에 접근 | 요소값 변경은 가능
console.log(array); // [10, 2, 3]

// 기본 자료형(타입)
// string, number, boolean, undefined, null, symbol 
// 참조 자료형(타입)
// object (array, function, date, 정규표현식-RegExp)

//! 연산자

// 논리 연산자
// && || !

//? 1. && 연산자
// : a와 b가 모두 true여야만 true를 반환
// : 어느 하나라도 false인 경우 false 반환
// - a && b에서 a값이 false 인 경우 b의 값을 계산 X

// a 쿠키(회원정보 있을 경우 true, 없을 경우 false)
// b 모든 회원이 접근 가능 / 회원만 접근할 수 있는 페이지

// a가 false라면(회원이 아니라면) 
//  >> 회원만 접근할 수 있는 페이지 렌더링 X

age = 10;
if (age !== null) {
  console.log("값이 있을 경우 true");
}

if (age) {}
if (!age) {}

let token = null;
token && console.log("회원만 접근 가능");

token = "회원";
token && console.log("회원만 접근 가능");

//? || 연산자
// : a || b  연산자
// : a의 값이 false일 경우 b의 값을 계산/렌더링
true || console.log("무조건 출력");
// a의 값에 대한 논리 뿐 아니라 b의 결과식도 계산해야하는 경우

// 삼항 연산자
// 조건 ? "참" : "거짓"
token ? console.log("로그인") : console.log("로그아웃"); 

// 리액트(jsx/tsx)에서 if 조건식이 아닌
// 연산자를 활용하여 조건식을 작성하는 이유
// >> html, css, js, ts
// html 코드가 작성되는 ()내에서 {}의 사용은 해당 코드를 js/ts의 문법으로 인식

// true ? "A" : "B" - A
// false ? "B" : "A" - A
// true && "A"
// : 그리고 
// true와 "A"도 반드시 true 여야만 출력

// true || "A"
// : 또는
// true가 한 개 이상이면 더 이상 다른 값들은 의미가 X
// >> "A"가 true이지만 해당 결과를 해석하지 X
// ==>> 아무런 결과가 실행되지 X
