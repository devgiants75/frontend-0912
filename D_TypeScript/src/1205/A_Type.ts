{
//! 유니언 타입, 인터섹션 타입

//? 유니언 타입
// 사용자가 string 또는 number 또는 boolean 타입의 데이터를 입력
// 입력된 데이터 타입에 따라 다른 처리
// string타입: 문자열을 대문자 처리
// number타입: 제곱한 값을 반환
// boolean타입: 반대 값을 반환

function processInput(input: string | number | boolean): string | number | boolean {
  // 유니언 타입 사용 시 타입 제한을 하지 않은 경우에는
  // 유니언 타입으로 지정된 모든 타입에서 중복되는 속성만! 사용 가능
  // input.toFixed(); - 해당 속성은 string에서 사용할 수 없기 때문에 오류
  // >> 유니언 타입은 교집합

  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (typeof input === 'number') {
    return input * input;
  } else {
    return !input;
  }
}

let input1 = 'input one';
let input2 = 2;
let input3 = false;

console.log(processInput(input1));
console.log(processInput(input2));
console.log(processInput(input3));

//? 인터섹션 타입
// 타입 속성을 사용하여 User 타입, Permissions 타입 정의
// User는 name: string과 age: number 속성
// Permissions는 role: string과 permissions: string[] 속성
// 두 타입 속성의 인터섹션을 사용하여 EnhancedUser 타입을 생성

type User = {
  name: string;
  age?: number; // 필수 값 X
}

type Permissions = {
  readonly role: string;
  permissions: string[];
}

type EnhancedUser = User & Permissions;

let user1: EnhancedUser = {
  name: "Lee Seung Ah",
  // age: 30,
  role: 'developer',
  permissions: ['frontend', 'backend']
}

user1 = {
  name: "Lee Do Kyung",
  role: 'admin', // 객체 자체를 새롭게 부여
  permissions: ['hello', 'hi']
}

// readonly의 읽기 전용 속성은 해당 객체에서
// readonly로 지정된 속성을 따로 수정하고자 할 때 오류 발생
// : 객체가 생성된 후에는 이 속성의 값을 변경할 수 X
// user1.role = 'HR'; - Error

}