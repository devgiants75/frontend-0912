//! 객체의 속성 존재 여부 확인
// : 객체에 없는 속성에 접근 - undefined 자료형
// : 조건문으로 undefined인지 아닌지 확인

// 객체 생성
let object = {
  name: 'Lee Seung Ah',
  age: 30,
  job: 'developer'
}

// 객체 내부에 속성이 있는지 확인
if (object.name !== undefined) {
  // name속성이 있는 경우 실행
  console.log('name 속성이 있습니다.');
}  else {
  console.log('name 속성이 없습니다.');
}

// 조건문을 연산자를 활용하여 간단하게 표시
// object.name
// object.hobby 속성의 여부를 확인
// : 논리연산자(and, or, not)를 사용하여 표시

// 실행 X
object.name || console.log('name 속성이 없습니다.');
// 실행 O
object.hobby || console.log('hobby 속성이 없습니다.');

//? 기본 속성 지정하기
// let object = {
//   name: 'Lee Seung Ah',
//   age: 30,
//   job: 'developer'
// }

// 객체의 기본 속성을 지정
object.name = object.name !== undefined ? object.name : '이름을 알 수 없는 고객';
object.hobby = object.hobby !== undefined ? object.hobby : '취미를 알 수 없음';

// 객체 출력(JSON 형태로 반환)
console.log(JSON.stringify(object, null, 2));
console.log(object.hobby);

// 객체의 기본 속성을 간단하게 지정
object.name = object.name || '이름을 알 수 없음.';
object.favorite = object.favorite || '떡볶이';
console.log(object.favorite);

//! 2. 배열 기반의 다중 할당
// : 배열과 비슷한 방법으로 한 번에 여러 개의 변수에 값을 할당

// 다중 할당의 형태
// : [식별자, 식별자, 식별자, ...] = 배열

let [a, b] = [1, 2];
console.log(a);
console.log(b);
console.log(a, b);

[a, b] = [b, a];
console.log(a, b); // 2 1

// : 배열의 크기는 같을 필요 X
// : const 키워드로도 사용 가능
let arrayA = [1, 2, 3, 4, 5];
const [aa, bb, cc] = arrayA;
console.log(aa, bb, cc);

//! 3. 객체 기반의 다중 할당
// : 객체 내부에 있는 속성을 꺼내서 변수로 할당할 때 사용

// 객체 속성을 꺼내서 다중 할당
// { 속성명, 속성명 } = 객체
// { 식별자=속성명, 식별자=속성명 } = 객체

// 객체 생성
const bookObject = {
  name: '어린왕자',
  price: 10620,
  publisher: '열린책들'
}

// 객체에서 변수를 추출
// name속성과 price속성을 그대로 꺼내옴
const { name, price } = bookObject;
console.log(name, price);

// name속성을 aaa라는 이름, price속성을 bbb라는 이름 꺼내옴
const { aaa=name, bbb=price } = object;
console.log(aaa, bbb);

//! 4. 배열 전개 연산자

//? 얕은 복사
// 배열과 객체는 할당할 때 얕은 복사가 이루어짐.

// 사야 하는 물건 목록
const 물건_1123 = ['우유', '식빵'];
const 물건_1124 = 물건_1123;

물건_1123.push('고구마');
물건_1124.push('토마토');

// 출력
console.log(물건_1123); // ['우유', '식빵', '고구마', '토마토']
console.log(물건_1124); // ['우유', '식빵', '고구마', '토마토']

// : 얕은 복사(참조 복사)는 서로 이름만 다를 뿐 서로 같은 메모리 참조값을 가짐

//? 깊은 복사
// : 두 배열이 완전히 독립적으로 작동
// : 전개 연산자를 사용하여 깊은 복사가 가능
// [...배열]

const 물건_1125 = [...물건_1123];
물건_1125.push('치즈');
console.log(물건_1123);

// 전개 연산자를 사용한 배열 요소 추가
// [...배열, 자료, 자료, 자료]

const 추가구매 = ['감자, 오렌지주스'];
const 물건_1126 = ['양파', ...물건_1125, ...추가구매];
console.log(물건_1126);

//! 5. 객체 전개 연산자
// : 배열과 동일하게 깊은 복사를 할 때 전개 연산자를 사용
// {...객체}

//? 얕은 복사
const puppyA ={
  이름: '구름',
  나이: 3,
  분류: '푸들'
}

const puppyB = puppyA;
puppyB.이름 = '초코';
puppyB.나이 = 2;

console.log(JSON.stringify(puppyA));
console.log(JSON.stringify(puppyB));

// 전개 연산자를 사용한 깊은 복사
const puppyC = {...puppyA};
puppyC.이름 = '감자';
puppyC.나이 = 4;

console.log(JSON.stringify(puppyA));
console.log(JSON.stringify(puppyC));

// 전개 연산자를 사용한 객체 요소 추가
// {...객체, 자료, 자료, 자료}

const puppyD = {
  예방접종: true,
  ...puppyA,
  이름: '나비', // 기존의 속성을 덮어 쓰기
  나이: 1 // 기존의 속성을 덮어 쓰기
}

console.log(puppyD);