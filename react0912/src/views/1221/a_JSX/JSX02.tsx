import React from 'react'

//! JSX안에 자바스크립트 값 사용하기

//? 1. JSX 내에서 중괄호 사용하기 (2가지 방법)
// a. JSX 태그 내에서 직접 텍스트 사용 시
// b. 속성 =(기호) 바로 다음에

export default function JSX02() {
  //? 1. 중괄호를 사용한 변수 참조
  const welcomeMessage = "환영합니다!";

  //? 2. 중괄호를 사용한 함수 호출
  const greeting = (name: string) => `안녕하세요 ${name}님`; 

  //? 3. 중괄호를 사용한 객체 사용
  type UserType = {
    name: string;
    age: number;
  }

  const userInfo: UserType = {
    name: '이준국',
    age: 29
  }

  //?

  return (
    <>
      <div>{welcomeMessage}</div>
      <div>{greeting('이승아')}</div>
      <div>
        이름: {userInfo.name}, 나이: {userInfo.age}
      </div>
    </>
  )
}
