// 사용자 정보가 담긴 배열에서 
// 특정 조건에 만족하는 사용자들의 이름을 
// 지연된 시간 후에 콘솔에 출력

// users는 '5개의 객체'를 요소로하는 배열
// 객체: 객체 내부의 값에 접근하고 싶은 경우 마침표를 사용하여 접근
// ex) users.name, users.age, users.isActive

const users = [
  { name: 'A', age: 25, isActive: true },
  { name: 'B', age: 30, isActive: false },
  { name: 'C', age: 35, isActive: true },
  { name: 'D', age: 20, isActive: false },
  { name: 'E', age: 28, isActive: true },
];

// 비즈니스 로직 
// 1. isActive가 true인 사용자들만 필터링 (filter())
// 2. 필터링된 사용자들의 name을 추출 (map())
// 3. 타이머함수를 사용하여 콘솔에 name을 하나씩 출력(forEach(), setTimeout())

// users 배열의 각 요소를 user라는 이름으로 filter()에 전달 >> user객체의 isActive값이 true인 요소만 새로운 배열로 생성
users
  .filter(user => user.isActive)
  .map(user => user.name)
  .forEach(name => {
    setTimeout(() => {
      console.log(name);
    }, 2000);
  })