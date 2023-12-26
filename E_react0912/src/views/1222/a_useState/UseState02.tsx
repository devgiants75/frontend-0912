import React, { useState } from 'react'

//! useState를 사용한 이벤트 처리
// React의 이벤트 핸들러 
// : onClick과 같이 'camelCase'를 사용
// : 문자열이 아닌 함수를 '이벤트'에 전달

//? useState와 이벤트 처리의 결합
// 사용자의 액션(버튼 클릭, 폼 제출 등)에 따라 상태를 변경
// 이벤트 핸들러 내에서 useState 상태 업데이트 함수를 호출하여 상태를 변경

export default function UseState02() {
  const [inputValue, setInputValue] = useState<string>('');

  // 요소의 이벤트를 전달
  // 이벤트 객체
  // : React에서 이벤트를 처리할 때, 이벤트 객체가 핸들러 함수에 전달
  // : input의 onChange를 사용하면 이벤트 객체 e를 파라미터로 받아올 수 있다.
  
  // e.target.value
  //? e.target
  // : 이벤트가 발생한 DOM 요소를 가리킴.
  //? value 속성
  // : 해당 요소의 현재 값에 접근하는데 사용

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 사용자의 입력값을 상태로 설정
    setInputValue(e.target.value);
  }

  const handleClick = () => {
    // 상태 설정 함수를 사용하여 inputValue를 초기화
    setInputValue('');
  }

  return (
    <>
      {/* 
        input의 텍스트를 p태그의 내용으로 전달하는 이벤트 설정 
        
        onChange 이벤트
        : 사용자가 입력 필드에 타이핑할 때 마다 발생하는 이벤트
        : input, textarea, select 등의 HTML 요소에 적용
      */}
      <h5 style={{ backgroundColor: 'black', color: 'white' }}>
      useState를 사용한 이벤트 처리
      </h5>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {/* 
        Reset 버튼 클릭 시 input태그 안의 내용이 초기화 
      */}
      <button onClick={handleClick}>Reset</button>
      <p>Input Value: {inputValue}</p>
    </>
  )
}