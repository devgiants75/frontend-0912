// TaskManager 클래스 정의
// : T 타입의 할 일을 관리
var TaskManager = /** @class */ (function () {
    //? 생성자
    // 초기 할 일 목록은 비어 있음
    // ID는 1부터 시작
    function TaskManager() {
        this.tasks = [];
        this.nextId = 1;
    }
    //? 할 일 추가 함수
    TaskManager.prototype.addTask = function (content) {
        // 새 할 일을 목록 추가
        this.tasks.push({ id: this.nextId, content: content });
        // 다음 ID 증가
        this.nextId++;
    };
    //? 할 일 제거 함수
    TaskManager.prototype.removeTask = function (id) {
        // 지정된 ID의 할 일을 목록에서 제거
        // 인수로 받아오는 id를 가진 요소만 제외한 새로운 배열로 할당
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        // 변경된 목록을 다시 렌더링
        this.renderTasks('task-list');
    };
    //? 할 일 목록을 화면에 렌더링하는 함수
    TaskManager.prototype.renderTasks = function (containerId) {
        var _this = this;
        var container = document.getElementById(containerId);
        container.innerHTML = ''; // 기존 목록을 비움
        this.tasks.forEach(function (task) {
            // 새로운 목록 항목 생성
            var li = document.createElement('li');
            // 항목에 내용 추가
            li.textContent = "".concat(task.content);
            // 삭제 버튼 생성
            var deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.onclick = function () {
                _this.removeTask(task.id);
            };
            // 항목을 컨테이너 추가
            li.appendChild(deleteButton);
            container.appendChild(li);
        });
    };
    return TaskManager;
}());
// 웹 페이지가 로드될 때 실행되는 함수
window.onload = function () {
    var taskManager = new TaskManager(); // 문자열 타입의 할 일 관리자 생성
    var addButton = document.getElementById('add-task');
    var newTaskInput = document.getElementById('new-task');
    var taskList = document.getElementById('task-list');
    addButton.onclick = function () {
        // 입력된 값을 할 일로 추가
        taskManager.addTask(newTaskInput.value);
        // 할 일 목록을 화면에 렌더링
        taskManager.renderTasks('task-list');
        // 입력 필드 초기화
        newTaskInput.value = '';
    };
};
