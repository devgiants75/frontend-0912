// 1. 입력 필드에서 '추가'버튼을 클릭하면
//    새로운 항목이 리스트에 추가되도록 구현

let addButton = document.getElementById('add-btn');
let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
  let newItem = document.createElement('li');
  newItem.textContent = todoInput.value;
  newItem.classList.add('todo-item');
  todoList.appendChild(newItem);
  todoInput.value = '';
});

// 토글(Toggle)
// : 두 가지의 상태를 취할 수 있는 장치나 기능

// 리스트의 항목을 클릭하면 '완료' 상태를 토글(Toggle)할 수 있도록 설정
todoList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
})