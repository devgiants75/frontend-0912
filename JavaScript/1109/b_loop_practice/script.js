//! 반복문 연습 예제

let fruits = ['apple', 'banana', 'cherry'];

//? 1. 배열의 모든 요소를 출력

// for문
console.log('---for문---');
for (let index = 0; index < fruits.length; index++) {
  // 배열 요소 가져오기
  // : 배열명[요소 인덱스 번호]
  console.log(fruits[index]);
}

// while문
console.log('---while문---');

let index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

// do-while문
console.log('---do-while문---');

index = 0;

do {
  console.log(fruits[index]);
  index++;
} while (index < fruits.length);

//! 반복문 사용하기 실습
// 사용자로부터 입력 받기(do while문)

// userInput 변수에 propmt('Enter a number greater than 10')
// userInput 변수가 10을 초과하는 수가 아닌 경우 반복

let userInput;
do {
  userInput = prompt('Enter a number greater than 10');
} while (userInput <= 10);

//! prompt창
// prompt 함수는 항상 문자열을 반환

let input = prompt('Enter a number');
let numberInput = Number(input); // 명시적으로 숫자로 변환
let sum = numberInput + 10;

//! 반복문 실습
const para = document.querySelector('p');
const inputNumber = document.querySelector('input');
const btn = document.querySelector('button');

// 버튼에 클릭 이벤트 리스너 추가
btn.addEventListener('click', function() {
  // 클릭 시 출력 단락의 텍스트를 초기화
  para.textContent = "Output: ";
  // 입력 필드에서 값을 가져와 num 변수에 저장
  let num = inputNumber.value;
  // 입력 필드 초기화(비움)
  inputNumber.value = '';
  // 입력 필드에 다시 포커스
  inputNumber.focus();

  // 1부터 사용자가 입력한 숫자(num)까지 반복
  for (let index = 1; index <= num; index++) {
    // 현재 숫자의 제곱근을 계산
    let sqRoot = Math.sqrt(index); // 현재 숫자의 제곱근을 계산
    // 해당 제곱근이 정수가 아닌 경우 반복을 계속
    // >> index가 완전제곱수가 아닐 경우 건너뛰기
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }

    // index가 완전제곱수인 경우 현재 숫자를 단락의 텍스트에 추가
    para.textContent += index + " ";
  }
})
