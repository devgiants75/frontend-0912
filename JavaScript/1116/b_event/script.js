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

// 이벤트 객체 실습
// : 16개의 타일 세트
// : querySelectorAll()을 사용하여 16개의 타일의 참조를 div 상수에 할당
// 반복문을 사용하여 16개의 타일에 이벤트 핸들러를 등록
// 각각의 타일을 클릭했을 때 클릭된 타일의 배경색이 변경되도록 지정

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return randomColor;
}

const divs = document.querySelectorAll('div');

// divs에 담긴 div 요소들을 순회하기 위한 반복
for (let i = 0; i < divs.length; i++) {
  // 각 div 요소에 onclick 이벤트 핸들러 할당
  divs[i].onclick = function (e) {
    // e.target은 클릭된 요소를 참조
    e.target.style.backgroundColor = bgChange();
  }
}

//! 2. 기본 행동 방지
// 텍스트 필드가 비워져있는지를 검사하는 onsubmit 이벤트 핸들러 구현
// : 비었다면 이벤트 객체에 있는 양식 제출을 멈추도록 지정
// : 양식 아래에 있는 단락에 에러 메시지를 표시
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const para = document.querySelector('p');

form.onsubmit = function (e) {
  if (fname.value === '' || email.value === '') {
    // 기본 행동을 방지하는 메소드
    e.preventDefault();
    para.textContent = 'You need to fill in both name and email';
  }
}

//! 3. 이벤트 버블링과 캡쳐
// : 같은 이벤트 타입의 두 이벤트 핸들러가 한 요소에서 작동될 때 어떠한 일이 일어나는지를 기술하는 방법

//? 이벤트 버블링(내부 > 외부 요소)
// : 특정 요소에서 이벤트가 발생했을 때
// : , 그 이벤트가 상위의 요소들로 전달되는 현상
// 예) HTML 페이지에서 버튼 요소가 클릭되면 버튼 요소부터 시작해서 그의 부모요소들을 거쳐서 최상위 요소까지 전달

//? 이벤트 캡처링(외부 > 내부 요소)
// : 이벤트 버블링과 반대방향으로 이벤트가 전달되는 현상
// : , 최상위 요소에서 시작되어 이벤트가 발생한 요소까지 이벤트를 전달

// 이벤트의 전파 특징으로
// : 두 가지가 충돌하는 경우 부모 요소들로 전파

// 이벤트 전파를 중지
// : event.stopPropagation() 메서드
// : 해당 메서드를 호출할 경우, 현재 이벤트 이후의 전파가 중지

document.addEventListener('DOMContentLoaded', function() {
  let parentDiv = document.getElementById('parentDiv');
  let childButton = document.getElementById('childButton');

  parentDiv.addEventListener('click', function() {
    console.log('parent Div Capturing');
  });

  childButton.addEventListener('click', function(e) {
    console.log('Child Button Capturing');
    e.stopPropagation();
  });

})