{
//! 타입스크립트 제네릭의 제약 조건(Constraints)

//? 제약조건의 정의
// : 타입 매개변수가 특정 조건을 만족해야 한다는 것을 명시하는 방법
// : 제네릭 타입의 사용 범위를 제한하고, 특정 속성이나 메소드에 접근 가능

interface Lengthwise {
  // 하나의 속성(length)을 가지는 인터페이스
  // : 해당 속성의 타입이 number

  // Lengthwise 인터페이스를 구현하는 모든 객체는 숫자 타입의 length 속성을 반드시 가져야 한다.
  length: number;
}

// T라는 제네릭 타입이 Lengthwise 인터페이스를 확장(상속)해야 함.
// : length 속성을 포함하는 어떠한 객체든지 인자로 받을 수 있음.
function constraintsFunc<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // .length 속성이 반드시 존재함을 확신
  return arg;
}

let constraintsVar = constraintsFunc({ length: 10, value: 3 });
console.log(constraintsVar);
// 10
// { length: 10, value: 3 }

} // 닫히는 중괄호 