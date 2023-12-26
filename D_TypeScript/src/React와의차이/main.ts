// DOM 조작을 위한 요소 접근
const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

// 각 버튼의 동작 구현, 이벤트 리스너 추가
// : 클릭 시 number 요소의 텍스트를 업데이트

if (increase && decrease && number) {
  increase.onclick = () => {
    // parseInt함수: 문자열을 정수로 변환, 두 번째 매개변수는 변환하고자 하는 진수를 표현
    const current = parseInt(number.innerText, 10);
    number.innerText = (current + 1).toString();
  };

  decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = (current - 1).toString();
  };
}