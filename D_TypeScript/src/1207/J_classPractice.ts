{
//! 직원 관리 시스템
// Employee 기본 클래스 생성
class Employee {
  // 속성: name (문자열)과 id (숫자)
  // name: string;
  // id : number;

  // 생성자를 사용하여 초기화
  constructor(public name: string, public id: number) {}

  // 메서드: displayInfo() 메서드 - 직원의 정보를 출력
  displayInfo(): void {
    console.log(`Name: ${this.name}, ID: ${this.id}`);
  }
}

// Manager 클래스 생성
// : Employee 클래스를 확장
class Manager extends Employee {
  // 추가 속성: subordinates (Employee 배열)
  private subordinates: Employee[] = []; // 하위 직원 목록

  // 부모 클래스의 생성자를 호출
  constructor(name: string, id: number) {
    super(name, id);
  }

  // 메서드: addSubordinate(employee: Employee) 메서드 - 하위 직원을 목록에 추가
  addSubordinate(employee: Employee) {
    this.subordinates.push(employee);
  }

  // 메서드: listSubordinates() - 모든 하위 직원의 정보를 출력
  listSubordinates(): void {
    console.log(`Manager: ${this.name}`);
    this.subordinates.forEach(employee => employee.displayInfo());
  }
}

const manager = new Manager('lsa', 1);
const emp1 = new Employee('ldk', 2);
const emp2 = new Employee('ljg', 3);

manager.addSubordinate(emp1); // lsa 매니저의 하위 직원으로 emp1을 추가
manager.addSubordinate(emp2); // lsa 매니저의 하위 직원으로 emp2을 추가

manager.listSubordinates();
} // 닫히는 중괄호