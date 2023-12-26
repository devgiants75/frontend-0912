{
// 타입스크립트 함수

//! 함수의 선언과 호출

function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet('lsa'));

type ArrowGreetType = (name: string) => string;
const arrowGreet: ArrowGreetType = (name) => `Hello, ${name}`;

console.log(arrowGreet('ldk'));

//! 선택적 매개변수와 기본 매개변수
// 선택적 매개변수는 함수 호출 시 생략 가능
// , 매개변수를 선택적으로 허용

// 기본 매개변수는 매개변수에 기본값을 할당

function select(name?: string, greeting: string = 'hi'): string {
  if (name) {
    return greeting + " " + name;
  } else {
    return greeting;
  }
}
console.log(select()); // hi
console.log(select('hello')); // hi hello
console.log(select('hello', 'lsa')); // lsa hello

// 선택적 매개변수와 기본 매개변수의 차이
// 두가지 모두 함수 호출 시 생략 가능
// 선택적 매개변수는 생략된 경우: undefined로 처리
// 기본 매개변수는 생략된 경우: 지정된 기본 값을 사용

//? 주의사항
// 선택적 매개변수는 반드시 필수 매개변수 뒤에 작성
// 기본 매개변수는 필수 매개변수와 선택적 매개변수 양쪽에 작성 가능
// 기본 매개변수가 필수 매개변수 앞에 작성된 경우
// : 기본 매개변수를 생략하려면 반드시 undefined를 전달

//! Rest 매개변수
// : 함수에 여러 개의 매개변수를 그룹화하여 배열로 전달하는 기능
// : 함수에 가변적인 수의 인자를 안전하고 효율적으로 처리하도록 하는 기능

// ...연산자를 매개변수 앞에 사용하여 정의
function sum(...numbers: number[]): number {
  // reduce 메소드(reducer 함수)
  // : 네 개의 매개변수를 가질 수 있음.
  // 누적 계산의 결과값: accumulator
  // 처리할 현재 요소: currentValue
  // (선택사항) 처리할 현재 요소의 인덱스
  // (선택사항) reduce를 호출한 배열
  // (선택사항) accumulator의 초기값
  return numbers.reduce((a, b) => a + b, 0); // a += b
}

const result1 = sum(1, 2, 3, 4, 5);
console.log(result1); // 15
const result2 = sum(10, 20, 30);
console.log(result2); // 60
const result3 = sum(3, 56, 1, 6, 7, 4, 2, 9); // 88
console.log(result3);

function greetEveryone(name: string, ...names: string[]): string {
  // join 메소드
  // : 배열의 모든 요소를 연결하여 하나의 문자열로 생성
  // : 배열 내의 각 요소를 문자열로 변환하고 지정된 구분자(선택사항)로
  // : 해당 요소들을 구분하여 결합
  return names.map(name => `Hello ${name}`).join(', ');
}
console.log(greetEveryone('lsa', 'ldk', 'ljg'));

//? Rest 매개변수는 항상 마지막에 위치
//? Rest 매개변수 지정 시 타입을 주의하여 지정

//! 함수의 오버로딩
// : 같은 이름의 함수에 대해 여러 매개변수 타입과 반환 타입을 정의하는 기능

//? 특징
// : 함수는 '하나 이상의 타입 시그니처'를 가질 수 있다.
// : 함수는 '단 하나의 구현'을 가질 수 있다.

//? 기본 문법
// : 함수 선언부는 여러 개가 될 수 있지만, 구현은 하나만 있어야 한다.
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  // 함수 구현부
  // : 함수의 중괄호는 반드시 하나여야 한다.

  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    // concat() 메서드
    // : 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환
    return a.concat(b);
  }

  throw new Error('Invalid arguments');
}

console.log(add(1, 2));
console.log(add('lee', 'seungah'));

// 함수에 대한 다양한 타입의 매개변수를 제공할 수 있도록 지정
// 그와 동시에 타입 안정성을 유지

}