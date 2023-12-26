{
//! 생성자(Constructor)

//? 생성자 함수의 정의
// : 클래스의 인스턴스가 생성될 때 자동으로 호출되는 특별한 메소드
// : 인스턴스의 초기화(초기 상태 설정)
// : 프로퍼티의 초기값 설정

//? 생성자 함수 사용법
// : constructor 키워드를 사용하여 클래스 내부에 정의
// : 인자를 받아서 클래스의 프로퍼티를 초기화

//? 특징
// : 클래스는 단 하나의 생성자만 가질 수 있다.
// : 반환값X, 자신을 new 키워드와 함께 호출하는 대상(클래스)의 새로운 인스턴스를 암시적으로 반환
// : 필수적인 요소X, 생성자가 없는 경우 TS는 빈 생성자를 자동으로 추가

class Person {
  // 멤버 변수
  name: string;
  age: number;

  // '생성'자 함수
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 메소드
  describe(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

let person1 = new Person('lsa', 28);
console.log(person1.name);
console.log(person1.describe());

let person2 = new Person('ldk', 30);
console.log(person2.name);
console.log(person2.describe());

// 빈생성자의 경우
// : 클래스 생성자를 통해 클랫의 인스턴스가 생성될 때 실행될 로직을 정의
// : 매개변수와 반환값이 없는 함수와 유사
class Dog {
  // 생성자는 임의의 매개변수를 가질 수 있다.
  constructor(barkingSound: string) {
    console.log(`${barkingSound}`);
  }

  // constructor() {
  //   console.log('bow!!!');
  // }
}

let choco = new Dog('bow!!!');

// 속성 기본값
// : 함수의 기본 인자와 유사한 개념으로 클래스 속성에도 기본값 제공이 가능

// 읽기 전용 속성
// : readonly키워드를 사용하여 읽기 전용 속성 정의
// : 속성 선언 또는 생성자 외의 장소에서는 읽기 전용 속성에 값 할당 불가

class Triangle {
  // vertices: number;

  // constructor() {
  //   this.vertices = 3;
  // }

  vertices: number = 3;
  readonly height: number;

  constructor(height: number) {
    this.height = height;
  }
}

let triangle = new Triangle(4);
console.log(triangle.height);

triangle.vertices = 4; // 변경 가능
// triangle.height = 5; - 읽기 전용 속성이기 때문에 외부에서 값 할당 시 오류 생성

//! this 키워드

//? this 키워드 정의
// : 클래스의 현재 인스턴스를 참조하는 키워드
// : 클래스의 멤버변수나 메소드에 접근할 때 사용

//? 사용 시 주의점
// : 메소드나 생성자 내에서 클래스의 멤버에 접근할 때 this를 사용
// : 화살표 함수 내에서 사용
// : - 자신만의 this 바인딩을 생성하지 X
// : - 해당 함수가 선언된 범위의 this를 사용

// this 키워드를 화살표 함수 내에서 사용하는 경우에는 스코프 확인이 필수!

class Human {
  age: number;

  constructor() {
    this.age = 0;

    setInterval(() => {
      this.age++; 
      // this는 Human의 인스턴스를 가리킴

      // 화살표 함수의 this값은 함수가 호출되는 방식과 무관하게, 함수가 작성된 위치에 따라 결정
      // : 객체 내에 화살표 함수를 정의하면
      // : 해당 함수의 this는 외부 스코프(즉, 객체를 둘러싼 스코프)의 this를 가리킴.
    }, 3000);
  }
}
let a = new Human();

let number = 3;
const myObject = {
  number: 42,
  // this가 myObject를 가리킴.
  regularFunction: function() {
    return this.number;
  },
  // this를 외부 스코프(해당 코드에서는 전역 스코프)에서 캡쳐
  arrowFunction: () => {
    // 엄격한 타입 체킹으로 인한 오류
    return number; // return this.number;
  }
}
console.log(myObject.regularFunction()); // 42
console.log(myObject.arrowFunction()); // 3


} // 닫히는 중괄호