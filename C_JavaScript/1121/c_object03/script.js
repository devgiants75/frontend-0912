//! 객체의 참조 타입 이해
// 자바스크립트의 데이터 타입은 크게 2가지로 나눔.

//? 1. '원시' 타입(Primitive Type)
// : 문자열, 숫자, 불린, null. undefined, symbol

//? 2. 참조 타입(Reference Type)
// : 객체를 포함한 나머지 데이터 타입

//? 2-1. 참조 타입 정의
// : 메모리에 직접 저장된 값을 참조하는 데이터 타입
// : 객체(object), 배열(array), 함수(function) 등을 포함

//? 2-2. 참조의 이해
// 참조 타입은 변수에 직접 값을 저장하는 대신에
// , 메모리에 저장된 값을 참조

// 참조 타입의 변수를 다른 변수에 할당할 경우
// : 새로운 변수는 원래 변수가 참조하고 있던 값이 저장된 메모리의 주소를 복사
// : 두 변수가 같은 객체를 참조

// 원시 타입의 경우 직접적인 값만을 사용
let num1 = 3;
num2 = num1;
console.log(num2); // 3

num1 = 5;
console.log(num2); // 3

// 참조 타입
let computer1 = {
  name: 'SamSung Book3'
};

let computer2 = computer1;
console.log(computer2);

computer2.name = 'SamSung Book3 Ultra';
console.log(computer1.name); // SamSung Book3 Ultra

// 참조: 해당 자료의 주소값을 가짐.
// computer1과 computer2의 두 변수는 같은 객체를 참조하고 있기 때문에 각각의 값을 변경할 시에는 원본 객체도 변경

//? 2-3. 참조에 의한 함수 호출
// 함수에 참조 타입의 변수를 전달할 경우
// , 함수 내부에서 해당 변수를 변경하면 원본 객체도 변경
// : 함수에 변수를 전달할 때 값이 아닌 참조(주소값)를 전달하기 때문

function chageName(computer) {
  computer.name = 'SamSung Book3 Ultra';
}

let computer3 = {
  name : 'SamSung Book3'
};

chageName(computer3);
console.log(computer3.name);

//! 객체의 복사
// : 깊은 복사 & 얕은 복사

// 얕은 복사
// : 복사본이 원본 객체를 참조하므로 원본 객체가 변경되면 복사본에 영향 O

let animal1 = {
  name: 'choco'
};

let animal2 = animal1;

// 깊은 복사
// : 원본 객체의 값을 완전히 복제하여 새로운 객체를 생성 >> 원본 객체와 복사본이 서로 독립적
let animal3 = JSON.parse(JSON.stringify(animal1));
// JS에서는 깊은 복사를 위해 JSON.parse(JSON.stringify(obj));를 사용

animal3.name = 'qwerty';
console.log(animal1.name); // choco
console.log(animal3.name); // qwerty

//! 자바스크립트 속성 존재 확인
// 속성이 객체 존재하는지 확인을 하기 위해서
// , in 연산자를 사용

let book = {
  title: 'Little Prince',
  author: 'Saint Exupery',
  publishYear: 1943
}

console.log('title' in book); // true
console.log('hello' in book); // false

//! 속성 삭제
// delete 연산자를 사용하여 삭제
delete book.author;
console.log('author' in book); // false

//! 메소드 축약 표기
// ES6부터는 객체 리터럴 내에서 메소드를 정의할 때
//  function 키워드를 생략 가능
let teacher = {
  name: 'Seung Ah',
  greet() {
    console.log('Hello' + this.name);
  }
}