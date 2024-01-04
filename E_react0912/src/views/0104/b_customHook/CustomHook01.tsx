import React from 'react'
import { useInput } from '../hooks/useInput';

//! 커스텀 훅

// 단일 입력 필드
export default function CustomHook01() {
  const nameInput = useInput('');
  
  return (
    <div>
      <input
        {...nameInput}
        type="text"
        placeholder='Enter your name'
      />
      {/* 
        커스텀 훅 사용 시
        사용할 컴포넌트에 변수에 할당하여
        객체처럼 반환값을 사용
      */}
      <p>Your name is: {nameInput.value}</p>
    </div>
  )
}
