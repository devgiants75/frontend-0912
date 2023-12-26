{
//! 유니온 타입과 제네릭
// 유니온 타입: 여러 타입 중 하나가 될 수 있는 값을 의미

function processValue<T extends string | number>(value: T) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }

  return value;
}

const processString = processValue('string');
const processNumber = processValue(123);
console.log(processString, processNumber);

//! 제네릭 유틸리티 타입
// : 타입스크립트에 내장된 일련의 제네릭 타입
// : 기존 타입을 변환하거나 조작하는데 사용

//? Partial: 모든 속성을 선택적으로 만들어줌.
interface User {
  name: string;
  age: number;
}

// 예시) 사용자 데이터
const users: { [key: number]: User } = {
  1: { name: 'lsa', age: 27 },
  2: { name: 'ljg', age: 29 } 
}

function updateUser(id: number, changes: Partial<User>) {
  // 업데이트 로직
  const user = users[id];
  if (!user) {
    console.log(`User with id ${id} not found`);
  }

  // 변경 사항 적용
  users[id] = { ...user, ...changes}
}

updateUser(2, { name: 'ldk', age: 30 }); 
console.log(users[2]); // { name: 'ldk', age: 30 }

//? Readonly: 모든 속성을 읽기 전용 속성으로 만들어줌.
interface ReadUser {
  readonly name: string;
  readonly age: number;
}

let user: Readonly<User> = {
  name: 'LSA',
  age: 27
};
// user.name = 'LDK'; - 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.

} // 닫히는 중괄호