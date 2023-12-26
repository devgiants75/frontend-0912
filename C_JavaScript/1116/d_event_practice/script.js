/*
  thumb-bar의 이미지를 클릭
  : 해당 이미지로 full-img 변경

  ! button 태그에 클릭 이벤트가 발생한 경우
  1. Darken 버튼 클릭 시
    (버튼의 class 속성이 dark로 지정)
  : 버튼의 textContent가 'Lighten'으로 변경
  : overlay의 배경 색이 'rgba(0, 0, 0, 0.5);로 지정

  2. Lighten 버튼 클릭 시
    (dark이 아닐 경우)
*/

// 요소 선택

// 이미지 파일 이름 배열 선언
const images = [
  'picture1.jpg', 
  'picture2.jpg', 
  'picture3.jpg', 
  'picture4.jpg', 
  'picture5.jpg'
];

// 이미지에 대한 대체 텍스트를 저장하는 객체 선언
const alts = {
  'picture1.jpg' : 'picture1.jpg',
  'picture2.jpg' : 'picture2.jpg',
  'picture3.jpg' : 'picture3.jpg', 
  'picture4.jpg' : 'picture4.jpg',
  'picture5.jpg' : 'picture5.jpg'
}