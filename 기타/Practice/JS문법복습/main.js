// 주식 추가 함수
// newElement라는 함수를 정의합니다. 이 함수는 사용자가 '추가' 버튼을 클릭했을 때 호출됩니다.
function newElement() {
  // 테이블 참조 및 행 추가
  // getElementById 함수를 사용하여 HTML 문서에서 "stockTable"이라는 ID를 가진 요소 (여기서는 테이블)에 할당
  // insertRow 함수를 이용하여 테이블에 새로운 행 추가
  // -1을 인자로 전달: 새 행이 테이블의 마지막에 추가
  
  ////
  // 입력 필드에서 값 얻기 (value속성 사용)

  // 입력 유효성 검사 (if문 사용)
  // alert 함수를 사용(("All fields must be filled out!")

  ////
  // 행에 셀 추가 및 값 채우기
  // insertCell 함수를 이용하여 새 행에 셀을 추가합니다. 
  // 각 셀의 innerHTML 속성을 이용하여 해당 셀에 사용자가 입력한 값 할당

  // 삭제 버튼 추가 및 이벤트 리스너 설정
  // innerHTML 속성을 이용: 버튼 요소를 추가

  // 입력 필드 초기화
  // 마지막으로, 모든 입력 필드를 빈 문자열로 설정하여 초기화합니다
}

// 이벤트 리스너 등록
// 추가 버튼에 이벤트 리스너 추가
document.getElementById("addBtn").addEventListener('click', newElement);