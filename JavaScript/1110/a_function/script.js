// input 텍스트 필드와 단락을 포함하고 있는
// HTML 두 요소에 대한 참조를 두 변수에 저장
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

// 매개변수를 제곱
function squared(num) {
  return num * num;
}

// 매개변수를 세제곱 
function cubed(num) {
  return num * num * num;
}

// 매개변수의 팩토리얼 (5! = 5 * 4 * 3 * 2 * 1)
// 양수의 값이 매개변수로 전달 
// 음수가 들어올 경우 - 계산X (반환 undefined)
// 0이 들어올 경우 - 계산X (반환 1)

// 매개변수로 전달된 값 num
// - 매개변수의 값이 -1씩 감소되어 1이 될 때까지 반복
// - 감소되는 값들이 곱해져서 결괏값을 도출
// - (반복된 결괏값에 다시 할당 곱셈)
function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;

  let x = num - 1;
  while (x > 1) {
    num *= x; 
    // num = num * (num - 1)
    // num = num * (num - 1) * (num - 2) 
    // ...
    x--;
  }

  return num;
}

// 텍스트 필드에 입력된 숫자를 출력하는 방법을 포함하는
// 이벤트 핸들러 작성

// input.onchange = function () { }
input.addEventListener('change', () => {
  // 문자열로 입력된 값을 부동 소수점 숫자로 변환
  const num = parseFloat(input.value);

  if (isNaN(num)) {
    // num이 NaN일 경우
    // html요소의 textContent 속성을 사용하는 경우
    // : 텍스트만 추가 가능 (html 태그를 문자열로 취급)
    para.textContent = 'You need to enter a number.';
  } else {
    // num이 숫자인 경우
    // html 태그를 실제 태그로 출력하고자 하는 경우
    // : innerHTML 속성을 사용
    para.innerHTML = `${num} squared is ${squared(num)}. <br />`;
    
    para.innerHTML += `${num} cubed is ${cubed(num)}. <br />`;
    para.innerHTML += `${num} factorial is ${factorial(num)}. `;
  }
})