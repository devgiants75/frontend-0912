// 해당 파일을 묶어서 한 번에 내보내기 가능
export { add, subtract };

//! 모듈과 네임스페이스

//? 1. 모듈
// : 코드들을 하나의 단위로 묶어 관리하는 방법
// : 독립 가능한 기능의 단위

//^ 모듈의 장점
// - 재사용성
//   : 공통 코드를 모듈로 분리하여 여러 곳에서 재사용이 가능
// - 유지 보수
// - 전역 스코프 오염을 방지
//   : 이름 공간이 파일 단위로 제한되어 전역 이름 공간을 침범하지 X
//   : 모듈 내에서 선언된 변수, 함수, 클래스 등을 명시적으로 내보내지 않는 이상 모듈 외부에서 접근할 수 X

//^ 모듈의 수출과 수입

// 1. 모듈 내보내기(Export)

// : 모듈에서 함수, 클래스, 변수, 인터페이스 등을 외부로 내보낼 때 사용
// : export로 내보낸 기능은 다른 모듈에서 불러와 사용 가능
// >> 각 파일에 export {};을 사용하는 경우 해당 파일이 모듈화

export let arr = [1, 2, 3]; 

function add(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x - y;
}

// 2. 모듈 불러오기(Import)
// : 다른 모듈에서 내보낸(export된) 요소를 가져올 때 사용
// import { 모듈명 } from '파일루트';

// 3. Default 모듈 내보내기
// : 하나의 모듈에서 '단 하나의 기능이나 객체'를 기본적으로 내보내고 싶을 때
// : export default 키워드 사용
// : 주로 하나의 모듈에 하나의 주요 기능이 있는 경우에 적합
export default class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
}

// 4. Default 모듈 불러오기
// : 일반 import문을 사용하여 불러올 수 있다.

// 일반 import문과의 차이점
// : 중괄호 {} 없이 이름을 지정하여 불러 올 수 있다.

//? 네임스페이스
// : 논리적으로 그룹화하고, 이름 충돌을 방지하는 방법

// 장점
// - 코드 그룹화
//   : 관련된 기능들을 네임스페이스 안에 그룹화
// - 충돌 방지
//   : 전역 스코프에서의 이름 충돌을 예방

// 스코프를 하나 만들어서 이름을 붙이는 것과 같다
namespace MyMath {
  export function add(x: number, y: number): number {
    return x + y;
  }
}

console.log(MyMath.add(4, 8));

//? 모듈 VS 네임스페이스
// 모듈: 파일 단위로 코드를 분리, ES6 모듈 시스템을 따름.
// 네임스페이스: 주로 전역 변수의 오염을 방지하기 위해 사용, 하나의 파일 내에서 사용