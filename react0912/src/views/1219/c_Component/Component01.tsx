import React from 'react'
import puppy01  from '../../../assets/images/puppy-1.jpg'

//! 컴포넌트(Component)
// : 사용자 인터페이스(UI)를 구축하는 기본 요소

//! 컴포넌트 사용 방법
//? 1. 컴포넌트 내보내기(export default)
//? 2. 함수 정의
// : React 컴포넌트는 일반 JS 함수와 동일하지만, 함수명을 항상 대문자로 시작해야 한다.
//? 3. 마크업 추가
// : src와 alt 속성을 가진 img 태그를 반환
// JSX: HTML처럼 작성되지만 JS코드로 분류
//      JS내에서 마크업을 내장할 수 있게 함.
function Image() {
  // HTML 코드 내에서 문법 사용 시
  // : 중괄호 내에서 사용

  // 자바스크립트 문법 내에서 HTML 코드 작성 시
  // : 소괄호 내에서 사용
  return (
    <img src={puppy01} alt="강아지1" style={{ width: '150px'}}/>
  );
}


//? 4. 정의된 컴포넌트 사용
export default function Component01() {
  // 마크업이 한 개인 경우 return 키워드와 동일한 줄에 작성 가능
  return (
    // return 키워드와 동일한 줄에 없는 경우 반드시 () 소괄호로 감싸야 함.
    <div>
      {/* 
        return에서 태그안에 
        소문자 사용 시 React가 HTML 태그로 인식
        대문자 사용 시 React가 컴포넌트로 인식
      */}
      {/* p태그 */}
      <p>강아지 이미지 컴포넌트 사용</p>
      {/* Image 컴포넌트 */}
      <Image />
      <Image />
      <Image />
    </div>
  )
}

