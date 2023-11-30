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
type User = {
  id: string;
  name: string;
}

type ValidateUser = (user: User) => boolean;

let userId: User = {
  id: 'user-123',
  name: '이승아'
};

const isValidUser: ValidateUser = (user) => user.id !== null;
// 함수 사용
console.log(isValidUser(userId));
}