//! 이벤트에 필요한 개념 정리

//! 1. 이벤트 객체
// : 이벤트 핸들러가 호출될 때, 브라우저는 자동으로 이벤트 객체를 생성하여 이벤트 핸들러에 전달
// : 이벤트와 관련된 여러 정보가 포함
// 예) 마우스 이벤트 - 마우스의 위치 정보
// 예) 키보드 이벤트 - 어떤 키가 눌러졌는지에 대한 정보
// : event, evt, e등과 같은 이름을 명명된 매개변수로 전달

const btn = document.querySelector('button');
const div = document.querySelector('div');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// 이벤트 객체인 e를 함수에 포함하고
// , 이벤트 객체의 target프로퍼티를 사용하여
// , 이벤트가 일어나는 버튼 그 자체에 실행
function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  // target 프로퍼티: 항상 이벤트가 발생된 요소에 대한 참조
  e.target.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);
div.addEventListener('click', bgChange);
