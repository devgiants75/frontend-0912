{
//! 추상 클래스와 추상 메소드

//? 정의
// 1. 추상 클래스
// : 인스턴스화 할 수 없고, 하나 이상의 추상 메소드를 포함할 수 있는 클래스
// : 공통의 기능을 정의, 상속을 통하여 해당 기능을 구현하도록 강제하는 틀을 제공
// - abstract 키워드를 사용하여 정의

// 2. 추상 메소드
// : 구체적인 구현이 없이 선언만 된 메소드
// - 메소드의 구현이란 로직이 작성되는 부분: 중괄호

// : 파생 클래스가 반드시 구현해야 하는 메소드의 틀을 제공
// - 추상 클래스 내에서 abstract 키워드를 사용하여 선언

abstract class Animal {
  abstract makeSound(): void; // 추상 메소드

  // 추상클래스 내에서는 반드시 한 개 이상의 추상 메소드가 정의되어야 함.
  // : 그 외에는 다른 일반 메소드와 일반 멤버 변수 정의도 가능
  move() {
    console.log('moving...');
  }
}

class Dog extends Animal {
  // 추상 클래스를 상속받은 클래스에서는
  // 반드시 추상 메소드를 구현해야 함.
  makeSound(): void {
    console.log('Woof! Woof!');
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();


//! 인터페이스 구현(Implementing Interfaces)

//? 정의
// : 메소드와 속성의 시그니처를 정의하는 구조체
// : 클래스가 특정 기능을 구현하도록 강제하며, 다형성을 지원

//? 구현방법
// : interface키워드를 사용하여 정의
// : implements 키워드를 사용하여 해당 클래스가 정의된 인터페이스를 구현함을 선언

interface IAnimal {
  name: string;
  makeSound(): void;
}

class Cat implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log('Meow!');
  }
}

const myCat = new Cat('Cats');
myCat.makeSound(); // Meow!

//! 추상클래스 vs 인터페이스
// 추상 클래스는 클래스의 '이다(is - a)'관계를 나타냄
// : 상속 받는 하위 클래스가 부모 클래스의 특정 종류로 간주

// 인터페이스는 클래스가 '할 수 있는(has - a)'능력을 나타냄
// : 해당 기능을 할 수 있음에 중점.

// 공통점: 확장성과 유지보수성을 가짐.

} // 닫히는 중괄호