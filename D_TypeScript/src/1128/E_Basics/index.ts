// 자바스크립트 런타임은 코드가 실행될 때 코드의 오류가 존재한다면 런타임 환경에서 오류를 작성

const message = 'hello';

console.log(message.toUpperCase);

// message(); - 코드 작성 시에 오류를 발견하고 알려줌.
// 타입스크립트는 예외가 아닌 실행을 실패
