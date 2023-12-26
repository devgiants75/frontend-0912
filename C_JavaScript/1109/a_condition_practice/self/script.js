//! 조건문 실습

//? 1. 입력 값 검증 (if문)
// age 변수에 prompt 창('Please enter your age.')에서 받아오기
// 해당 age 변수 값이 0미만이거나 120초과일 경우
// 콘솔창에 Invalid age.를 출력

let age = prompt('Please enter your age.');

if (age < 0 || age > 120) {
  console.log('Invalid age.');
}

//? 2. 점수에 따른 등급 부여 (else if문)
// score 변수에 prompt 창('Please enter your score.')에서 받아오기
// 0점 미만 100점 초과일 경우 콘솔창에 Invalid score. 출력
// 해당 점수가 90점 이상 A
// 해당 점수가 80점 이상 B
// 해당 점수가 70점 이상 C
// 해당 점수가 60점 이상 D
// 그 밖의 점수일 경우 F
// >> 모두 콘솔창에 출력

let score = prompt('Please enter your score.');

if (score < 0 || score > 100) {
  console.log('Invalid score');
} else if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}

//? 3. 요일에 따른 활동 추천(switch문)
// 현재 요일에 따라 다른 활동을 추천

// Date()함수의 getDay() 메서드를 사용
// : 주어진 날짜의 현지 시간을 기준으로 요일을 반환
// 0: 일요일 ~ 6: 토요일

let day = new Date().getDay();
console.log(day); // 오늘 날짜를 기준으로 4(목요일) 출력

// 0: 일요일 "It's Sunday. Take a rest!"
// 1 ~ 5: 평일 "It's a weekay. Let's work hard!"
// 6: 토요일 "It's Saturady. Enjoy your weekend!"
// default: "Invalid day."

switch (day) {
  case 0:
    console.log("It's Sunday. Take a rest!");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It's a weekay. Let's work hard!");
    break;
  case 6:
    console.log("It's Saturady. Enjoy your weekend!");
    break;
  default:
    console.log("Invalid day.");
}

//! 삼항연산자 예제(배경색 변경)

const html = document.querySelector('html');
const select = document.querySelector('select');
const div = document.querySelector('div');

document.body.style.padding = '10px';
div.style.marginTop = '100px';

function update (bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  select.value === 'black'
    ? update('black', 'white')
    : update('white', 'black');
};