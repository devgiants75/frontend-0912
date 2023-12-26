// 타입 속성 정의
// : Task 타입 정의
// : 제네릭 타입 T를 사용하여 지정
type Task<T> = {
  id: number;
  content: T;
}

// TaskManager 클래스 정의
// : T 타입의 할 일을 관리
class TaskManager<T> {
  //? 멤버 변수 지정: private 설정
  // 할 일 목록을 저장하는 배열(tasks)
  private tasks: Task<T>[];
  // 다음 할 일의 고유 ID(nextId)
  private nextId: number;

  //? 생성자
  // 초기 할 일 목록은 비어 있음
  // ID는 1부터 시작
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  //? 할 일 추가 함수
  addTask(content: T): void {
    // 새 할 일을 목록 추가
    this.tasks.push({ id: this.nextId, content }); 
    // 다음 ID 증가
    this.nextId++; 
  }

  //? 할 일 제거 함수
  removeTask(id: number): void {
    // 지정된 ID의 할 일을 목록에서 제거
    // 인수로 받아오는 id를 가진 요소만 제외한 새로운 배열로 할당
    this.tasks = this.tasks.filter(task => task.id !== id);
    // 변경된 목록을 다시 렌더링
    this.renderTasks('task-list');
  }

  //? 할 일 목록을 화면에 렌더링하는 함수
  renderTasks(containerId: string): void {
    const container = document.getElementById(containerId) as HTMLUListElement;
    container.innerHTML = ''; // 기존 목록을 비움
    this.tasks.forEach(task => {
      // 새로운 목록 항목 생성
      const li = document.createElement('li');
      // 항목에 내용 추가
      li.textContent = `${task.content}`;

      // 삭제 버튼 생성
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '삭제';
      deleteButton.onclick = () => {
        this.removeTask(task.id);
      }

      // 항목을 컨테이너 추가
      li.appendChild(deleteButton);
      container.appendChild(li);
    });
  }
}

// 웹 페이지가 로드될 때 실행되는 함수
window.onload = () => {
  const taskManager = new TaskManager<string>(); // 문자열 타입의 할 일 관리자 생성
  const addButton = document.getElementById('add-task') as HTMLButtonElement;
  const newTaskInput = document.getElementById('new-task') as HTMLInputElement;
  const taskList = document.getElementById('task-list');

  addButton.onclick = () => {
    // 입력된 값을 할 일로 추가
    taskManager.addTask(newTaskInput.value);
    // 할 일 목록을 화면에 렌더링
    taskManager.renderTasks('task-list'); 
    // 입력 필드 초기화
    newTaskInput.value = '';
  }; 
};
