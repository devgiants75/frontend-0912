//? 아이템들을 저장할 배열(items)
let items = [];

//? 새 아이템을 생성하는 함수(createItem)
function createItem() {
  // : 입력 필드의 DOM 요소를 읽어오기
  const inputField = document.getElementById('inputField');
  // : 입력 필드의 값을 공백을 제거하고 가져오기
  const newItem = inputField.value.trim();

  // : 새 아이템이 비어있지 않은 경우
  if (newItem) {
    // 기존 아이템 배열에 새 아이템을 추가
    // (전개 연산자 사용)
    items = [...items, newItem];

    // 입력 필드 초기화
    inputField.value = '';
    // 아이템 목록을 다시 렌더링(renderItems)
    renderItems();
  }
}

//? 아이템을 삭제하는 함수(deleteItem)
function deleteItem(index) {
  // '특정 인덱스의 아이템'을 제외한 새로운 배열을 생성(filter)
  // : 선택된 요소의 인덱스 번호를 매개변수로 전달받음.

  //? filter 메소드의 인자 순서
  // 1. 현재 요소(배열의 현재 요소)
  // 2. 인덱스(현재 요소의 인덱스)
  // 3. 배열(메소드가 호출된 배열 자체)

  // (_, i)
  // 첫 번째 인자(_)
  // : 현재 처리 중인 배열의 요소를 나타냄.

  // 두 번째 인자(i)
  // : 현재 처리 중인 요소의 인덱스 번호

  // 함수 조건
  // : 현재 처리 중인 요소의 인덱스가 index(매개)변수와 다른 경우에만 true를 반환
  items = items.filter((_, i) => i !== index);

  // 아이템 목록을 다시 렌더링(renderItems)
  renderItems();
}

//? 아이템 목록을 렌더링하는 함수(renderItems)
function renderItems() {
  // 아이템 목록을 담을 DOM요소를 읽어오기
  const itemList = document.getElementById('itemList');
  // 목록 초기화(innerHTML를 빈 문자열로 할당)
  itemList.innerHTML = '';

  // 아이템 배열을 순회하며 목록을 생성(forEach)
  // : item과 index 번호를 매개변수로 전달
  items.forEach((item, index) => {
    // 각 아이템을 위한 li요소 생성
    const li = document.createElement('li');
    
    // li 요소에 아이템 텍스트 추가
    li.textContent = item;
    
    // li 요소 클릭 시 해당 아이템 삭제 함수 호출
    // (호출 시 index 번호를 인수로 전달)
    li.onclick = () => deleteItem(index);
  
    // 생성한 li요소를 목록에 추가
    itemList.appendChild(li);
  });
}

// 문서가 로드되었을 때 아이템 목록을 처음으로 렌더링
document.addEventListener('DOMContentLoaded', renderItems);