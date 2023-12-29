//? 1. 템플릿 문자열
// : 문자열 내에 변수와 표현식을 쉽게 작성, 멀티라인 표현식을 간편하게 작성
const multiList = `
안녕하세요
반갑습니다`;

// : ${} 구문을 사용해서 변수나 표현식을 삽입 가능
const greeting = `${multiList}`;
console.log(greeting);

//? 2. 화살표 함수
// : 함수를 간단하게 표현하는 선언 방식
// : 기본 함수와 this 바인딩에 차이가 있다.

function TaditionalFunction() {
  this.value = 20;
  setTimeout(function() {
    console.log(this.value); // 스코프 내의 this만 가져옴 - undefined
  }, 1000);
}
TaditionalFunction();

const ArrowFuction = () => {
  this.value = 20;
  setTimeout(() => {
    // 함수가 선언될 때 상위 스코프의 this 상속
    // - 20
    console.log(this.value); 
  }, 1000);
}

ArrowFuction();

//! 3. 구조 분해 할당 & 스프레드 연산자

// a.구조 분해 할당
// : 배열이나 객체로부터 속성이나 요소를 쉽게 추출할 수 있는 표현식
const person = { name: 'lsa', age: 28, height: 169, gender: 'female' }

// 속성명의 변수명으로 속성값을 할당
const { name, age } = person;
console.log(name);
console.log(age);

// 배열의 구조 분해 할당은 원 배열의 요소의 수 보다
// 분해할 변수가 더 적은 경우에는 인덱스 순서로 할당
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first);
console.log(second);

// 구조 분해 할당의 기본값 설정
const { height, gender, job = 'developer' } = person
// const height = person.height;
// const gender = person.gender;
// const job = 'developer';
console.log(height, gender, job);

// b. 스프레드 연산자
// : 배열이나 객체의 요소를 쉽게 복사하거나 합칠 수 있는 연산자
const arr1 = [1, 2, 3];
// const arr2 = arr1;
const arr2 = [...arr1];
arr2[1] = 5;

// 배열을 할당하여 복사하는 경우 주소값이 복사되기 때문에
// , 복사된 배열을 수정하면 기존 배열 또한 똑같이 수정
// : 스프레드 연산자로 복사를 하는 경우 요소값만을 새로운 배열에 할당
console.log(arr1); 

const arr3 = [...arr1, 4, 5];
console.log(arr3);

const obj1 = { a: 1, b: 2};
const obj2 = { ...obj1, c: 3 };
console.log(obj1);
console.log(obj2);

//! 4. 비동기 프로그래밍
// : 순차적인 진행 X, 코드 실행이 완료되는 작업부터 출력하는 방법

// - Promise
//   : 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
const myPromise = new Promise((resolve, reject) => {
  const value = '성공';
  const error = '실패';

  if (resolve) {
    resolve(value); // 성공 결과 전달
  } else {
    reject(error); // 실패 사유 전달
  }
});

myPromise
  .then((value) => {
    // 성공 시 수행
  })
  .catech((error) => {
    // 실패 시 수행
  })
  .finally(() => {
    // 완료 시 수행 (성공/실패 여부와 상관업시)
  })

// - Async & Await
// : 프로미스를 더 쉽게 작성하도록 해주는 ES8 문법
// : 비동기 함수는 async 키워드로 선언
// : await 키워드를 사용하여 프로미스의 결과를 기다림

async function fetchData() {
  // 비동기적으로 수행할 로직을 작성
  try {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    // 데이터 처리

    // 비동기 수행 중 일어나는 오류를 반환
  } catch (error) {
    // 에러 처리
  }
}

//! 이벤트 처리
// 1. 이벤트 핸들링: 사용자의 인터랙션을 처리하는 방법
//    : JS에서는 DOM요소에 이벤트 리스너를 추가하여 사용자의 행동에 반응

// 버튼 요소 선택
const button = document.querySelector('button');

// 클릭 이벤트 핸들러 정의
function handleClick() {
  console.log('Button clicked!');
}

button.addEventListener('click', handleClick);

// 2. 이벤트 위임
// : 여러 요소에 대한 이벤트를 한 곳에서 효율적으로 처리하는 기법
// : 상위 요소에 하나의 이벤트 리스너를 추가, 이벤트가 발생한 하위 요소를 식별하여 처리

// 상위 요소 선택
const list = document.querySelector('ul');

// 이벤트 핸들러 정의
function handleListItemClick(event) {
  if (event.target.tagName === "LI") {
    console.log('List Item Clicked : ', event.target.textContent);
  }
}

list.addEventListener('click', handleListItemClick);