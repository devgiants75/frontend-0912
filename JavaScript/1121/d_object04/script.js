//! 객체의 속성과 메소드 사용

//! 1. 자바스크립트의 원시 타입과 참조 타입을
// >> 기본 자료형과 객체 자료형으로 구분

let variable = 1;
variable = 'one';
variable = 'true';

// 객체 자료형
// 속성과 메소드를 가질 수 있는 모든 형태: '객체'
// : 배열, 함수, 그 이외의 모든 자료형들이 객체

// 배열
let a = [];
a.sample = 10;

console.log(a.sample);

// 함수
function b() {

}

b.sample = 10
console.log(b.sample);

console.log(typeof a);
// 해당 객체가 배열인지의 여부를 확인하고 싶은 경우
// Array.isArray(배열명)
console.log(Array.isArray(a)); // true

console.log(typeof b); 
// 함수는 '실행이 가능한 객체'
// '일급 객체'
// : 함수는 객체의 특성을 완벽하게 구현가능하기 때문에 일급 객체로써 해당 자료형을 그대로 가짐.

//! 2. 기본 자료형을 객체로 선언
// const 객체 = new 객체자료형이름();

// new Number, new String, new Boolean

const f = new Number(273);
const g = Number(273);
console.log(typeof f); // object
console.log(typeof g); // number

f.sample = 10;
console.log(f.sample); // 10

// 객체 그 자체를 출력할 경우 객체 형태로 출력
console.log(f); 

// f는 객체이긴 하지만 숫자와 똑같이 활용 가능
// valueOf()메소드를 사용하여 값을 추출 가능

console.log(f + 1); // 274
console.log(f.valueOf()); // 273

//! 프로토타입으로 메소드 추가
// 숫자 객체 전체에 어떤 속성과 메소드가 추가 가능하다면, 기본 자료형 숫자도 속성과 메소드 사용이 가능
// : 어떤 객체의 prototype이라는 속성이 객체 전용 틀
// : , prototype 객체에 속성과 메소드를 추가하면 모든 객체(+ 기본 자료형)에서 해당 속성과 메소드를 사용 가능

// 객체자료형이름.prototype.메소드명 = function () {

// }

// Number 타입에 sample이라는 속성을 추가
Number.prototype.sample = 10;

const i = 273;
console.log(i.sample); // 10

// 제곱연산자 **
// : 숫자를 n제곱 
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(2 ** 4); // 16

// 프로토타입으로 숫자 메소드 추가
// power() 메소드 추가
Number.prototype.power = function(n = 2) {
  return this.valueOf() ** n
}

// Number 객체의 power() 메소드를 사용
const num = 3;
console.log(num.power()); // 9
console.log(num.power(3)); // 27
console.log(num.power(4)); // 81

// valueOf() 메소드
// : this ** n와 동일한 결과를 나타내지만
// : 객체 내부에서 값을 꺼내 쓰는 것임을 명확하게 전달하기 위해서 valueOf()를 사용

// indexOf()메소드
// : 문자열 내부에 어떤 문자열이 있는지, 배열 내부에 어떤 자료가 있는지 확인할 때 사용
// : 문자열 내에 있는 문자열이라면 그 인덱스를 출력
// : 문자열 내에 없는 문자열이라면 -1을 출력
const j = '안녕하세요';
console.log(j.indexOf('안녕')); // 0
console.log(j.indexOf('하세')); // 2
console.log(j.indexOf('없는 문자열')); // -1

const k = [1, 2, 3];
console.log(k.indexOf(2)); // 1
console.log(k.indexOf(1)); // 0
console.log(k.indexOf(4)); // -1

// contain() 메소드 추가
String.prototype.contain = function(data) {
  return this.indexOf(data) >= 0;
}

Array.prototype.contain = function(data) {
  return this.indexOf(data) >= 0;
}

// const j = '안녕하세요';
console.log(j.contain('안녕')); // true

// const k = [1, 2, 3];
console.log(k.contain(4)); // false