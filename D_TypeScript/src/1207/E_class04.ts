{
//! 상속(Inheritance)

//? 상속의 정의
// : 한 클래스(부모 클래스)의 속성과 메소드를 다른 클래스(자식 클래스)가 받아 사용할 수 있는 기능
// : 코드의 재사용성을 높이고, 유지보수성을 개선

//? 구현 방법
// extends(확장) 키워드를 사용하여 상속을 구현
// : 자식 클래스는 부모 클래스의 모든 public과 protected 멤버를 상속받음.

// 부모 클래스: 슈퍼 클래스, 상위 클래스
// 자식 클래스: 서브 클래스, 하위 클래스

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // 부모 클래스의 생성자 호출
  }

  bark() {
    console.log('Woof! Woof!');
  }
}

const dog1 = new Dog('choco');
dog1.move(10);
dog1.bark();

//! 메소드 오버라이딩(Overriding)

//? 오버라이딩 정의
// : 자식 클래스에서 부모 클래스의 메소드를 재정의
// : 기존의 메소드를 자식 클래스에 맞게 변경하여 사용

//? 구현 방법
// : 자식 클래스에서 부모 클래스와 동일한 이름의 메소드를 선언하여 오버라이딩
// : 필요에 따라 super 키워드를 사용하여 부모 클래스의 메소드 호출 가능

class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distance: number = 5) {
    console.log('Flying...');
    super.move(distance);
    // 부모 클래스의 메소드
    // console.log(`${this.name} moved ${distance}m.`);과 동일
  }
}

const bird = new Bird('Parrot');
bird.move();

// 상속과 오버라이딩
// : 재사용성과 확장성

} // 닫히는 중괄호