//? api
// : application programming interface
// : 웹 브라우저가 추가로 제공하는 기능

//! localStorage 객체
// : 웹 브라우저에 데이터를 저장하는 api
// : 사용자의 브라우저에 정보를 지속적으로 저장할 수 있는 방법
// : 쿠키와 비교하여 용량이 크고 (최대 5MB), HTML5에서 도입된 웹 스토리지 API의 일부

//! localStorage 특징
// - 서버로 전송X
// : 쿠키와 달리 서버로 자동 전송X
// : 서버에 불필요한 데이터 전송을 줄여 성능 향상 도움

// - 오래된 브라우저는 작동 X
// : HTML5에서 도입된 기능이기 때문에 구형 브라우저는 작동 X

// - 도메인 및 프로토콜이 별도로 분리
// : 같은 도메인에서 프로토콜(http, https)이 다르면 localStorage가 분리

// - 페이지를 변경하거나 브라우저를 닫더라도 값은 유지

//! localStorage 메소드
//? 1. localStorage.setItem('key', 'value');
// : key와 value를 로컬 스토리지에 저장

//? 2. localStorage.getItem('key')
// : key에 해당하는 값을 로컬 스토리지에서 가져옴

//? 3. localStorage.removeItem('key')
// : key에 해당하는 항목을 로컬 스토리지에서 제거

//? 4. localStorage.clear()
// : 로컬 스토리지의 모든 데이터를 제거

document.addEventListener('DOMContentLoaded', () => {
  const p = document.querySelector('p');
  const input = document.querySelector('input');
  const button = document.querySelector('button');

  const savedValue = localStorage.getItem('input');

  if (savedValue) {
    input.value = savedValue;
    p.textContent = `이전 실행 시 마지막 값: ${ savedValue}`;
  }

  input.addEventListener('keyup', (event) => {
    const value = event.currentTarget.value;
    // 값을 저장: setItem()
    localStorage.setItem('input', value);
    // localStorage.input = value;
  })

  button.addEventListener('click', (event) => {
    // 값을 모두 제거: clear()
    localStorage.clear();
    input.value = '';
  })
})