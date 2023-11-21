// 자바스크립트의 객체 프로토타입

//! 프로토 타입 기반 언어
// : 객체를 원형(프로토타입)으로 하는 복제 과정을 통해 객체의 동작 방식을 재사용 할 수 있게 하는 방법
// : 모든 객체들이 메소드와 속성들을 상속 받기 위한 템플릿으로써 프로토타입 객체를 가짐

//? 프로토타입 체인
// : 프로토타입은 해당 객체의 상위 객체로 부터 메소드와 속성을 상속받을 수 있음.
// : 다른 객체에 정의된 메소드와 속성을 한 객체에서 사용 가능

//! 생성자 함수를 사용한 객체 생성
// : 생성자 함수를 사용할 경우 코드를 재사용 하여 같은 구조의 객체를 여러 개 생성 가능
// : new 키워드를 사용하여 새 객체를 생성
// : 관례적으로 함수명의 첫 글자는 대문자로 시작
function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last': last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    let string = this.name.first + this.name.last;
    console.log(string);
  };
  this.greeting = function() {
    console.log('Hi' + this.name.first);
  }
}

let person1 = new Person('Seungah', 'Lee', 30, 'female', 'music');

console.log(person1.valueOf());