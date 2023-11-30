{
// 타입스크립트의 타입 명시 방법
// : 필수 사항 X
// : 프로그램의 안정성과 가독성을 높이는 중요한 역할

// 타입 어노테이션(Type Annotation)
// : 콜론을 이용하여 JS 코드에 타입을 정의하는 방식

//! 기본 타입(원시 타입: string, number, boolean 등)
// : 변수명 뒤에 콜론을 첨부하고 타입 명시
// : typeof 연산자를 사용했을 때 나타나는 변환값과 동일한 이름을 가짐.

// : String, Number, Boolean과 같이 대문자로 시작하는 타입 또한 유효
// : 위의 형태는 JS의 '특수 내장 타입'
// : 소문자 형태의 타입 사용을 권장!

let age: number = 30;
let name: string = '이승아';
let isStudent: boolean = false;

//! Array
// : 순서가 있는 요소의 모음을 나타내는 자료구조

// type[]
// Array<type>: 제네릭 타입

let list1: string[] = ['1', '2', '3'];
let list2: Array<number> = [4, 5, 6];

//! Tuple
// : 고정된 수의 요소 타입 & 순서가 있는 타입
// : 원소의 수와 각 원소의 타입이 정확히 지정된 배열의 타입을 정의
// : 명시된 개수 만큼만 원소를 지정 가능

// 배열과의 차이점
// : 튜플의 경우 Array<> 제네릭 타입 지정 X

// 타입을 지정할 때
// : 원소의 타입을 순서대로 작성
const nameAndHeight: [string, number] = ['이승아', 168];
// let tuple: [number, string, number] = [1, 2, '3']; // Error

// Array 객체의 메소드로 조작되는 요소의 변화는 가능
nameAndHeight.push(1);
console.log(nameAndHeight);

//! void 타입
// : 아무런 값이 없다.
// : 주로 함수에서 반환 값이 없거나 return이 있더라도 반환하는 값이 없을 때 사용되는 타입

function voidType(parameter: number): void {
  // 함수의 타입 정의
  // 파라미터와 반환값 정의가 가능
  // return parameter + parameter;
  console.log('반환값이 없는 함수');
  return; // undefined
}

console.log(voidType(3));

//! null & undefined
// JS와 달리 TS에서 null과 undefined의 경우 각각의 값만을 가짐.
// : null과 undefined에 자기 자신의 타입 그리고 void 타입 외의 타입에 할당하는 경우 에러 발생

let undefinedType: undefined = undefined;
// undefinedType = 1; - Error
// undefinedType = true; - Error
let nullType: null = null;
// nullType = '널 타입'; - Error

// null과 undefined는 모든 타입의 하위 타입이기 때문에
// , 두 타입은 모든 타입에 할당 가능

let nullNumber: number = 1;
// nullNumber = null;
// : 엄격한 null검사로 인한 오류

// tsconfing.json의 컴파일 옵션에
// --strictNullChecks 컴파일 옵션으로 인하여 null과 undefined가 각각 해당 이름의 타입을 가진 변수에만 할당 가능

//! any
// : 모든 타입에 대해서 허용하는 타입
// : 타입 검사 오류가 발생하는 것을 방지
// : 모든 타입과 호환 가능
let anyType: any = 3;
anyType = '문자';
anyType = true;
anyType = {}; 

// : any 타입의 경우 사전에 타입 오류를 계산할 수 없기 때문에
// : 예상치 못한 에러 발생 가능성이 높음.

// noImplicitAny
// : 타입이 지정되지 않은 값은 Typescript 컴파일러가 자동으로 any타입을 부여하는 동작
// : TS 컴파일러가 noImplicitAny를 활성화하는 경우
// : 암묵적으로 any로 간주하는 모든 경우에 오류 발생

//! never
// : 절대 발생하지 않는 값의 타입
// : 함수가 예외를 발생시키거나 끝나지 않을 때 사용
function error(message: string): never {
  throw new Error(message);
}

// error('에러입니다.');

//! bigint
// 큰 정수를 다루기 위한 원시 타입
// Bigint 함수를 사용하여 bigint 값을 생성

// const oneHundred: bigint = BigInt(100);
// : 오류 (lib' 컴파일러 옵션을 'es2020' 이상으로 변경)

//! symbol
// : 전역적으로 고유한 참조값을 생성하는 데에 사용하는 타입
// : 유일하고 변경 불가능한 값으로 생성
// : Symbol() 함수로 생성

const referrence = Symbol('name'); // referrence에 name이라는 설명을 가진 심볼을 생성

const symbol1 = referrence;
const symbol2 = referrence;

if (symbol1 === symbol2) {
  console.log(symbol1);
}


}