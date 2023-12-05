// 타입스크립트 인터페이스

//! 인터페이스의 정의
// : 객체 구조를 정의하는 타입스크립트의 기능
// : 컴파일 시간에 타입 체킹을 위해 사용되는 개념

// 코드의 가독성과 유지 보수성을 향상
// 다양한 구현체에 동일한 인터페이스를 적용하여 일관성과 재사용성을 제공

//! 인터페이스의 구조
type UserType = {
  name: string;
  age: number;
}

// 인터페이스명 지정 시 대문자로 시작
// type 속성과 마찬가지로 선택적 프로퍼티와 읽기 전용 프로퍼티 지정 가능
interface UserInterface {
  name?: string;
  readonly age: number;
}

// 인터페이스 사용(구현) 예제
let employee: UserInterface = {
  name: 'lsa',
  age: 27
}

// 인터페이스의 역할
// 1. 타입체킹: 개발자가 의도한 대로 코드 작동 가능
// 2. 코드 가독성 향상
// 3. 코드 재사용
// 4. 확장 가능성
// : 기본 인터페이스를 확장(상속)하여 멤버를 추가하거나 재정의 가능

// 확장된 인터페이스
// extends 키워드를 사용하여 확장
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

// 공통된 속성을 가진 인터페이스를 여러 번 정의하지 않아도 되기 때문에
// 코드 중복을 줄일 수 있다.
let square: Square = {
  color: 'blue',
  sideLength: 10
}