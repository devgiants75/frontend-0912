//! 이미지 슬라이더 구현
// : 사용자는 앞으로 이동, 뒤로 이동 버튼을 클릭하여, 이미지를 좌우로 슬라이드 할 수 있도록 동작 

// 자바스크립트 이벤트 핸들링
// : '이전'버튼과 '다음'버튼을 클릭하면 이미지가 좌우로 슬라이드 하도록 설정

// '이전', '다음'버튼의 HTML 요소를 참조
let prevButton = document.getElementById('prev-btn');
let nextButton = document.getElementById('next-btn');
// 슬라이드를 담고 있는 컨테이너 요소를 참조
let slideContainer = document.getElementById('slide-container');

// 전체 슬라이드 이미지의 요소를 참조(배열)
let slides = document.querySelectorAll('.slide');
let slideIndex = 0;

// 주어진 이벤트가 발생했을 실행할 함수를 등록
// click 이벤트(즉, 버튼 클릭 시 실행할) 함수 등록
prevButton.addEventListener('click', function() {
  
});

nextButton.addEventListener('click', function() {
  
});

// 각각의 슬라이드 위치를 업데이트하는 역할
function updateSlidePosition() {

}