import React from 'react'

/*
! JSX
  : JS 파일 내에서 HTML과 유사한 마크업을 작성할 수 있도록 해주는 JS의 구문 확장 문법

? 사용 목적
  : 선언적 뷰(UI를 직관적으로 설계)
  : 불필요한 DOM 설정이 필요 X

? 특징
  : JS + HTML(XML) 형태로 엄격한 문법 체계를 가짐
  : JSX 파일에서 Babel을 사용해서 JS로 변환을 하려면 XML 문법을 준수해야 함

? JSX 문법 규칙
  ^1. 단일 루트 노드
    : 하나의 '컴포넌트'는 단일 루트 노드만 반환
    : 두 개 이상의 태그는 무조건 하나의 태그로 감싸져야 한다.
    : 불필요한 div를 줄이기 위해서 리액트의 'Fragment'를 사용

  ^2. 태그 닫기
    : 태그는 반드시 닫혀있어야 한다.
    : input, br, hr, img 태그 사용 시 주의!

  ^3. 대소문자 구분
    : 태그 내의 이름이 대소문자로 구분
    : 소문자 - HTML 요소로 인식
    : 대문자 - 컴포넌트로 인식
  
  ^4. HTML 코드를 JSX로 변환 시 주의점
    : 대부분 camelCase로 작성
      - css 속성 사용 시 background-color 
        >> backgroundColor
        >> fontSize
    : class속성을 className으로 설정
      - HTML에서 코드를 가져오는 경우
      - ctrl + f(찾기 > 바꾸기)
*/ 

export function Div() {
  return (
    <>
      <div className="hello"></div>
      <div className="hello"></div>
      <div className="hello"></div>
    </>
  )
}
export default function JSX01() {

  // 노드(HTML)를 반환하는 부분
  return (
    // 전체 elements를 감싸는 단 하나의 요소가 있어야 한다.
    // 빈 Fragment <> </>
    <>
      {/* HTML 요소 */}
      <div>JSX01</div>
      <input type="text" />  
      <img src="" alt="" />
      <br />
      <hr />  

      {/* 아래의 Div는 컴포넌트 */}
      <Div></Div>
    </>
  )
}
