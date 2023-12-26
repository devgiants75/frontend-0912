{
//! 1. 타입 어노테이션(Type Annotation)

let number;
let anyNumber: any;

// 변수에 초기화가 되는 경우 
// any타입의 변수로 명시하지 않은 경우 초기화 값 타입의 변수로 재지정
number = 123.456; 
anyNumber = 123.789;
console.log(number.toFixed(2));
console.log(anyNumber.toFixed(2));

number = '전화번호';
anyNumber = '전화번호';
// console.log(number.toFixed(2));
// console.log(anyNumber.toFixed(2));

//! 2. 타입 별칭(Type Aliases)
// : 새로운 타입 이름을 생성하여 기존 타입을 참조할 수 있게 하는 기능
// : 코드의 가독성과 재사용성을 향상
// : 타입 별칭은 대문자로 시작!

//? 기본 사용법
// : type 키워드를 사용하여 정의
// type 별칭 = 타입;

//^ 변수 타입 별칭
type Text = string;
let textMessage: Text = '텍스트메시지입니다.';

//^ 객체 타입 별칭
type UserType = {
  readonly name: string;
  height?: number;
}

const user: UserType = {
  name: '이승아',
  // height: 168
}
// user.name = '이도경'; - Error

//^ 함수 타입 별칭

// ValidateUser의 매개변수인 user의 타입을 지정
type User = {
  id: string;
  name: string;
}

// 함수 타입 별칭
// User 타입인 매개변수를 받아 boolean 타입의 반환값을 생성하는 함수
type ValidateUser = (user: User) => boolean;

// 사용자가 입력되었을 때
// 사용자의 아이디가 null인 경우(입력하지 않은 경우) false
// 사용자의 아이디를 입력하였다면 true
const isValidUser: ValidateUser = (user) => user.id !== '';

let userAlias: User = {
  id: 'qwerty',
  name: '이승아'
};

// 함수 사용
console.log(isValidUser(userAlias));

// >> 함수 타입 별칭 예제
// 함수 타입 별칭 정의
type GreetFunction = (name: string) => string;

// 위의 타입 별칭을 사용하는 함수 구현
const greet: GreetFunction = (name) => {
  return `Hello, ${name}`;
}

// 다른 함수에서 동일한 타입 별칭 사용
const farewell: GreetFunction = (n) => {
  return `Goodbye, ${n}`;
}

// 함수 사용
console.log(greet('이승아'));
console.log(farewell('이도경'));
}