//! 객체 

//! 1. 객체(object)의 정의
// : 관련된 데이터와 함수의 집합
// : 객체 내부에서는 데이터와 함수를 프로퍼티(속성)와 메소드라고 불림.

// JS는 '객체' 지향 프로그래밍 언어
// : 실세계에 존재하고 인지하는 모든 것을 객체로 표현

// 객체는 데이터 타입 중 하나, 다양한 값을 담을 수 있는 컨테이너
// : 따라서 배열도 여러 타입의 자료를 담는 것이 가능한 객체의 일부
console.log(typeof([])); // object

// 객체를 생성하기 위해서는 JS의 다른 요소들과 
// , 마찬가지로 변수를 정의하고 초기화하여 시작
// 객체는 중괄호{}를 사용하여 초기화
let person = {
  //? 데이터
  // : 객체의 프로퍼티(속성)
  // name: ['Lee', 'SeungAh'],
  name: {
    // 하위 namespace 생성
    last: 'lee',
    first: 'SeungAh'
  },
  age: 27,
  gender: 'female',
  interests: ['develope', 'music'],

  //? 함수
  // : 객체의 메소드(method, 메서드)
  bio: function() {
    alert(
      this.name.first +
      " " +
      this.name.last +
      " is " +
      this.age +
      " years old. She likes " +
      this.interests[0] + 
      " and " + 
      this.interests[1] + "."
    );
  },
  greeting: function() {
    alert("Hi I'm " + this.name.last + ".");
  }
};

// 객체는 다른 이름값을 갖는 복수개의 멤버로 구성
// 한 쌍의 이름과 값은 ,(쉼표)로 구분되어야 하고
// , 이름과 값은 :(클론)으로 분리

//? 객체
// : 고유한 특성과 동작을 가지는 것

// '사람'
// 특성(속성: 프로퍼티)
// : '이름', '나이', '직업'

// 기능(동작: 메소드)
// : '걷다', '말하다', '먹다'

//! 2.객체의 기본 형태
let objectName = {
  member1Name: 'member1Value',
  member2Name: 2,
  member3Name: true
};
// 객체의 값으로는 JS에 있는 모든 데이터 타입을 사용할 수 있다.
// : 배열, 또 다른 객체, 함수 등 

//! 3. 객체 리터럴(object literal)
// : 프로퍼티(속성)와 메소드를 통해서 구현하는 객체
// : 중괄호를 사용하여 그 안에 키(이름)와 값이 콜론(:)으로 구분되는 속성
// : 객체를 생성할 때 컨텐츠(데이터)를 그대로 대입

//! 4. 점 표기법
// 객체에서 프로퍼티와 메소드에 접근하기 위해서
// : 점 표기법을 사용

// 네임스페이스(namespace)
// : 개체를 구분할 수 있는 범위를 나타내는 말
// : 하나의 이름 공간에서 하나의 이름이 단 하나의 객체만을 가리킴.

// 객체명(ex.person)은 네임스페이스처럼 동작
// , 객체 내에서 캡슐화되어 있는 것에 접근하려면 
// , '객체명.하위항목'으로 접근

// 하위 항목: 프로퍼티명, 배열의 일부, 객체의 메소드 등

console.log(person.age); // 속성
console.log(person.interests[1]); // 배열의 일부
// console.log(person.bio()); // 메소드

// 하위 namespaces
// : 다른 객체를 객체의 멤버값으로 갖는 것
console.log(person.name.last);
console.log(person.name.first);

// console.log(person.greeting());

//! 5. 괄호 표기법
// 객체의 프로퍼티에 접근하는 방법
// : 배열의 요소값에 접근하는 것과 동일하게
// : , 인덱스 숫자를 대신하여 각 멤버의 값들과 연결된 이름을 이용하여 접근
// : 객체를 '연관배열'이라고도 불림.

// 객체명['프로퍼티명']
console.log(person['age']);
console.log(person['name']['first']);

//! 6. 객체 멤버 설정
// : 객체 멤버 가져오기(반환)방법과 동일하게
// : , 점 표기법과 대괄호 표기법을 사용
console.log(person.age);
console.log(person['name']['first']);
person.age = 45;
person['name']['first'] = 'junGook';

console.log(person.age); // 45
console.log(person['name']['first']); // junGook

// 객체 멤버를 설정하는 것은
// 기존의 존재하는 프로퍼티나 메소드를 새롭게 정의하는 것 뿐만이 아니라
// , 완전히 새로운 멤버 생성도 가능
person['job'] = 'developer';
person.work = function() {
  console.log('work hard!');
};

console.log(person['job']);
person.work();

function addProperty() {
  // 사용자 입력을 변수에 저장
  let myDataName = document.getElementById('propertyName').value;
  let myDataValue = document.getElementById('propertyValue').value;

  // 객체 속성에 추가
  person[myDataName] = myDataValue;

  // 결과 출력
  console.log('Property added', myDataName, '=', person[myDataName]);
}
// 대괄호 표기법을 사용하여 멤버의 이름을 동적으로 사용 가능하며 변수값 또한 사용 가능

// >> 점 표기법: 멤버의 이름을 동적으로 사용X, 상수값만을 사용하는 것을 권장

//! 'this'
// : 지금 동작하고 있는 코드를 가지고 있는 객체를 가리킴

// greeting: function() {
//   alert("Hi I'm " + this.name.last + ".");
// }

// 위의 예제에서는 this가 person 객체를 가리킴.

// 두개의 다른 person 객체가 각각 다른 이름으로 생성될 경우, 호출 시의 해당 객체를 가리킬 때 사용

let person1 = {
  name: 'SeungAh',
  greeting: function() {
    console.log(this.name);
  }
}

let person2 = {
  name: 'JunGook',
  greeting: function() {
    console.log(this.name);
  }
}

// this는 실행중인 코드가 속해있는 객체
person1.greeting();
person2.greeting();

