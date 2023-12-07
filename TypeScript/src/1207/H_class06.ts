{
//! 정적(Static) 메소드와 프로퍼티

//? 정의
// : 클래스 인스턴스가 아닌 클래스 자체에 바인딩된 메소드와 프로퍼티
// : 인스턴스 없이도 클래스 이름을 통해 직접 접근하고 호출 가능

// 바인딩(binding)
// : 프로그램에 사용된 구성 요소의 실제 값 또는 프로퍼티를 결정짓는 행위

// 주의 사항
// : static 멤버(메소드와 속성)는 인스턴스와 독립적이기 때문에
// : static 메소드 내에서는 this 키워드를 사용하여 접근 할 수 X

// : 인스턴스별로 데이터를 유지할 필요가 없는 공통 기능 및 데이터에 적합

//? 사용방법
// static 키워드를 사용하여 정의'
class Circle {
  static pi: number = 3.14159;

  static calculateArea(radius: number): number {
    return Circle.pi * radius * radius;
  }
}

console.log(Circle.pi); // 3.14159
console.log(Circle.calculateArea(5)); // 78.53975

//! 접근자(Getter / Setter)

//? 정의
// getter
// : 클래스의 특정 프로퍼티 값을 읽을 때 사용되는 메소드
// setter
// : 클래스의 특정 프로퍼티 값을 설정할 때 사용되는 메소드

//? 사용 방법
// : get과 set 키워드를 사용하여 정의
// : 속성 값의 유효성 검사, 계산된 프로퍼티 등에 사용

// : 데이터를 보다 안전하게 관리
// : 복잡한 로직을 캡슐화
// : >> 클래스 외부에는 간단한 인터페이스만 제공 가능

class Employee {
  private _fullName: string = "";

  // 프라이빗한 멤버 변수에 접근하여 출력하는 getter
  get fullName(): string {
    return this._fullName;
  }

  // 프라이빗한 멤버 변수에 접근하여 설정하는 setter
  set fullName(newName: string) {
    if (newName.length > 0) {
      this._fullName = newName;
    } else {
      console.log('Error: name cannot be empty.');
    }
  }
}

let employee = new Employee();
employee.fullName = 'Lee Seung Ah';
let name = employee.fullName;
console.log(name); // Lee Seung Ah

employee.fullName = ''; // Error: name cannot be empty.

} // 닫히는 중괄호