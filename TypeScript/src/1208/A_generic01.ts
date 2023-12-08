{
//! 제네릭(Generic)

//? 1. 제네릭 정의
// : 재사용 가능한 컴포넌트를 만드는데 사용
// : 컴포넌트가 처리할 데이터 타입을 미리 지정하지 않고
// : , 해당 컴포넌트를 사용하는 시점에서 원하는 데이터 타입 지정 가능

//? 2. 제네릭의 필요성
// - 코드 중복을 줄임, 재사용 가능한 컴포넌트 생성
// : 다양한 타입을 처리하는 함수나 클래스 생성 가능
// - 타입 안정성을 보장
// : 컴파일 시점에 타입을 체크
// : 런타임에서 발생할 수 있는 에러를 방지

// 컴파일(Compile)
// : 소스코드를 작성하고 편집하는 과정

// 런타임(Runtime)
// : 컴파일 과정을 마친 프로그램이 사용자에 의해 실행되어 동작되어지는 때

//? 3. 제네릭의 기본 문법
// : 사용할 컴포넌트의 이름 뒤에 꺽쇠 괄호(< >) 안에 타입 변수를 넣는 것
// : 함수나 클래스 등에서 사용할 타입을 명시
// : 임의의 키워드를 사용하여 명시 (T)

function generic<T>(arg: T): T {
  // T는 타입 변수 (단일 타입 변수)
  // : 해당 타입 변수는 입력 인수의 타입을 T로 지정하고
  // : , 함수의 반환 타입을 T로 지정
  return arg;
}

// 제네릭으로 지정된 함수 사용
// : 함수를 호출할 때마다 다른 타입을 지정 가능
let stringOutput = generic<string>('string generic');
let numberOutput = generic<number>(500);
console.log(stringOutput); // string generic
console.log(numberOutput); // 500

// 여러 제네릭 타입 변수 지정
// : 여러 개의 독립적인 타입을 처리해야 할 때 여러 타입 변수를 활용
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second]
}

let pairOutput = pair<string, number>('string type', 40);
console.log(pairOutput); // [ 'string type', 40 ]

//? 4. 제네릭 사용 컴포넌트
//^ 제네릭 함수
function genericFunc<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
} 
let resultFunc = genericFunc<boolean>([true, false, true]);
console.log(resultFunc);

//^ 제네릭 인터페이스
// : 타입 매개변수<T>를 가지는 인터페이스

interface GenericInterface<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIndentity: GenericInterface<number> = identity;
console.log(myIndentity(5));

//^ 제네릭 클래스
// : 타입 매개변수<T>를 가지는 클래스
// : 다양한 타입의 속성이나 메소드를 지정 가능

class GenericClass<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, addFunction: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = addFunction;
  }
}

let myGenricVar = new GenericClass<number>(0, function(x, y) { return x + y; });
let myGenricStringVar = new GenericClass<string>('', function(x, y) {
  return `${x}, ${y}`;
})
console.log(myGenricVar.add(5, 3)); // 8
console.log(myGenricStringVar.add('hello', 'hi')); // hello, hi

} // 닫히는 중괄호