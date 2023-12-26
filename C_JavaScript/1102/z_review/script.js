// prompt 창으로 입력받은 값은 
// 기본적으로 문자형타입으로 지정

// 문제 1
const PI = 3.14; // 파이 상수 선언
let r = 10; // 반지름을 10으로 초기화
let area = PI * r * r; // 원의 넓이 계산
console.log(`넓이 : ${area}`); // 콘솔에 넓이 출력

// 문제 2
let inches = prompt("인치를 입력하세요: "); // 사용자로부터 인치를 입력받음
let centimeters = inches * 2.54; // 인치를 센티미터로 변환
alert(`${inches}inch는 ${centimeters}cm입니다.`); // 알림창을 통해 결과 출력
