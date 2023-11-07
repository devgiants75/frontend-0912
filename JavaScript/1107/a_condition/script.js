{
// 자바스크립트의 구성 요소
// 조건문, 반복문, 함수, 이벤트 등

//! 자바스크립트 조건문

// 조건문
// : 프로그램에게 특정 조건을 검사하고
// : , 그 결과에 따라 다른 행동을 하도록 명령하는 방식

// JS 조건문의 종류
// : if문, else문, else if문, switch문

//! 1. if문
// 가장 기본적인 조건문: 특정 조건이 참이면 코드 블럭이 실행

// if문의 기본적인 문법
// if (조건) {
  // 조건이 참(true)일 때 실행되는 코드
// }

// 조건은 보통 비교 연산자를 사용해 표현
// (==, !=, ===, !==, <, >, <=, >=)
// 리턴값(결과값)은 boolean타입(true, false)

// if문은 주어진 조건이 참(true)일 때만 코드 블럭을 실행
// 만약 조건이 거짓(false)이면 코드 블럭은 무시

let number = 10;

if (number > 0) {
  console.log("The number is positive");
}

//! 2. if (else)문
// else문은 if문과 함께 사용
// , if의 조건이 거짓(false)일 경우 else 뒤의 코드 블록이 실행

// if-else문의 기본적인 문법

// if (조건) {
//   조건이 참일 때 실행되는 코드
// } else {
//   조건이 거짓일 때 실행되는 코드
//}

// else문은 if문의 조건이 거짓일 때 실행
// 즉, if문의 조건을 만족하지 않는 모든 경우에 대해
//     else문의 코드 블럭이 실행

number = -10;

if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}

// if-else문의 코드 축약
// 실행될 코드 블럭이 한 줄일 경우 코드 축약이 가능
if (number > 0) console.log("The number is positive");
else console.log("The number is not positive");

// if-else문 예시
let shoggingDone = false;
let childsAllowance;

// 쇼핑을 완료 한 경우: 용돈을 10
// 완료하지 않은 경우: 용돈을 5

if (shoggingDone) {
  childsAllowance = 5;
} else {
  childsAllowance = 10;
}

//! 3. else if문
// if와 else 사이에 여러 개의 조건을 추가

// if문과 else문 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조

// else if문의 기본적인 문법

// if (조건1) {
//    조건1이 참일 때 실행되는 코드
// } else if (조건2) {
//    조건1이 거짓이고 조건2가 참일 때 실행되는 코드
// } else {
//    모든 조건이 거짓일 때 실행되는 코드
// }

// else if문은 if문의 조건이 거짓이고
// , else if문의 조건이 참일 때 실행

number = -10;

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// else if문의 예시
// 나이가 13살 미만 '어린이 입니다.' 출력
// 나이가 13살 이상 20살 미만 '청소년 입니다.' 출력
// 나이가 20살 이상 '성인 입니다.' 출력

let age = 20;

if (age < 13) {
  console.log("어린이 입니다.");
} else if (age >= 13 && age < 20) {
  console.log("청소년 입니다.");
} else {
  console.log("성인 입니다.");
}

// 조건식에 true와 false값과의 비교(===, !==)
// boolean 타입에서 false값으로 인식되는 값
// : false, 0, '', null, undefined

// 위의 값을 제외하고는 true값을 반환하기 때문에
// 변수가 참인지 또는 값이 존재하는지를 테스트하기 위해서
// 변수 이름 그 자체를 사용할 수 있음.

let cheese = 'Cheddar';

if (cheese) {
  console.log("Cheese avilable for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today");
}

//! 4. switch문
// 여러 가지 경우 중 하나를 선택하는데 사용
// 표현식의 값을 확인하고 해당 값과 일치하는 case 문의 코드 블록을 실행

// switch문은 여러 가지 가능한 케이스 중 하나를 선택하여
// 해당하는 코드 블록을 실행하는 제어 구조

// switch문의 기본적인 문법
// switch (식) {
//    case 값1:
//      식이 값1과 일치할 때 실행되는 코드
//      break;
//    case 값2:
//      식이 값2과 일치할 때 실행되는 코드
//      break;
//    ...
//    default:
//      식이 어떤 값과도 일치하지 않을 때 실행되는 코드
// }

// break문(필수X)
// : 이전의 선택이 표현식이나 값과 일치한다면
// : , 브라우저는 해당 코드 블록에서 실행을 멈추고
// : , switch문 아래에 있는 코드로 이동

// default문(필수X)
// : 어떤 case와도 일치하지 않는다면 실행하는 코드 블록

let fruit = 'banana';

switch (fruit) {
  case 'banana':
    console.log("I am a banana.");
    break;
  case 'apple':
    console.log("I am a apple.");
    break;
  case 'cherry':
    console.log("I am a cherry.");
    break;
  default:
    console.log("I don't know.");
}

//^ 날씨 예보 예제 작성하기

const select = document.querySelector('select');
const para = document.querySelector('p');

select.onchange = setWeather;

function setWeather() {
  const choice = select.value;

  // else if문 작성

  // if (choice === 'sunny') {
  //   para.textContent = "It's sunny day";
  // } else if (choice === 'rainy') {
  //   para.textContent = "It's rainy day";
  // } else if (choice === 'snowing') {
  //   para.textContent = "It's snowing day";
  // } else if (choice === 'overcast') {
  //   para.textContent = "It's overcast day";
  // } else {
  //   para.textContent = 'Please select weather';
  // }

  // switch문으로 작성
  switch (choice) {
    case 'sunny':
      para.textContent = "It's sunny day";
      break;
    case 'rainy':
      para.textContent = "It's rainy day";
      break;
    case 'snowing':
      para.textContent = "It's snowing day";
      break;
    case 'overcast':
      para.textContent = "It's overcast day";
      break;
    default:
      para.textContent = 'Please select weather';
  }
}

//! 5. 삼항(조건) 연산자
// 조건에 따라 값을 반환하는 JS에서 세 개의 
// 피연산자를 가지는 유일한 연산자
// : if-else문을 더 간결하게 표현

// 삼항 연산자의 기본적인 문법
// 조건 ? 표현식1 : 표현식2

// 주어진 조건을 평가한 후
// , 그 결과가 true면 표현식1을, false면 표현식2를 실행

// if (조건) {
  // 표현식1
// } else {
  // 표현식2
//}

number = 15;
let message = number > 10 
  ? 'The number is greater than 10' 
  : 'The number is not greater than 10';

console.log(message);

let score = 85;
let result = score >= 50 ? 'Passed' : 'Failed';
console.log(result);

//! 중첩된 if-else문과 삼항 연산자의 비교

/*
? 중첩된 if-else문
if (조건1) {
  조건1이 참일 때 실행될 코드
  if (조건2) {
    조건1과 조건2 모두 참일 때 실행될 코드
  } else {
    조건1은 참이지만, 조건2는 거짓일 때 실행될 코드
  }
} else {
  조건1이 거짓일 때 실행될 코드
}
*/

// 50점 이상일 경우 시험 합격
// 90점 이상일 경우 A
// 80점 이상일 경우 B
// 70점 이상일 경우 C
// 그외의 경우 D

// 50점 미만일 경우 불합격
// 재시험을 치뤄야 함.

score = 35;

if (score >= 50) {
  console.log("Passed");

  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else {
    console.log("D");
  }
} else {
  console.log("Failed");
}
}

// 위 중첩 if문을 삼항 연산자로 변환
score = 150;

let grade = 
  // 100점 초과 0점 미만의 점수는 존재하지 않음.
  score > 100 || score < 0 ? 'Not existed' :
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' :
  score >= 60 ? 'D' : 'Failed';

console.log(grade);

// 출력값 확인
true ? alert('출력A') : alert('출력B'); // A
true ? alert('출력B') : alert('출력A'); // B
true || console.log('출력A'); // 출력 X
true && console.log('출력A'); // A

// OR 연산자
false || false == false;
false || true == true;
true || false == true;
true || true == true;

// AND 연산자
false && false == false;
false && true == false;
true && false == false;
true && true == true;

// and 연산자는 조건식이 둘 이상일 경우
// , 하나만 false여도 최종 결괏값이 false

// >> 첫 번째 조건식이 false면, 두 번째 조건식은 체크하지 않고 바로 false
// and 연산자 사용 시 false가 될 확률이 높은 조건을 첫 번째 조건식으로 사용하는 것을 권장

// or 연산자는 조건식이 둘 이상일 경우
// , 하나만 true여도 최종 결괏값이 true

// >> true가 될 확률이 높은 조건식을 
// 첫 번째 조건식으로 사용하는 것을 권장