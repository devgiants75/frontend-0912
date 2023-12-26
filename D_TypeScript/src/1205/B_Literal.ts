//! 리터럴 타입(Literal)

// 1. '리터럴 타입'의 정의
// : 특정 문자열, 숫자 또는 불리언 값을 정확히 지정하는 타입
// : 특정 값으로 제한된 타입

// 해당 값만을 가지는 상수 또는 해당 값을 타입으로 지정한 변수
// : 다른 값을 할당하려고 하면 타입 에러가 발생

// 변수를 const로 선언하고 직접 리터럴 값을 할당(초기화)하면
// : 해당 값을 자동으로 리터럴 값으로 유추
const exactString = 'hello';
const exactNumber = 10;
const exactBoolean = true;

// 리터럴 타입은 특정 문자열, 숫자, 불린 값으로 변수를 '제한'
// let exactString: 'hello' = 'hello';
// let exactNumber: 10 = 10;
// let exactBoolean: true = true;

//? 2. 리터럴 타입 활용
// 유니언 타입과 함께 사용하여 다양한 값을 표현함과 동시에 제한 가능
type Directions = 'up' | 'down' | 'left' | 'right';

let moveUp: Directions = 'up';
moveUp = 'down';
// let moveBottom: Directions = 'bottom'; - Type Error

// 함수 인자로서의 리터럴 타입 지정으로 함수 인자를 특정 값으로 '제한'
function setAlignment(alignment: 'left' | 'right' | 'center'): void {
  // 함수 내용
}

// 리터럴과 원시 타입을 함께 사용 가능
// 문자타입 - yes, no
// 숫자타입 - 모든 숫자를 입력 가능

type Literal = number | 'yes' | 'no';
let gameStart: Literal = 'yes';
gameStart = 'no';
gameStart = 3;
gameStart = 33265468579654621654654;
// gameStart = 'hello';

// 리터럴 타입은 구체적인 값을 강제하거나
// , 특정 값들만 허용하는 로직 설계에 유용
// : 코드의 의도를 명확하게 표현, 오류 감소, 자동완성 및 리팩토링에 용이

// 리터럴 타입의 한계성
// : 고정된 값에만 제한되기 때문에 유연성이 떨어짐.