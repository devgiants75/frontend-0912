import React, { useState } from 'react'

//! useState
// : 함수형 컴포넌트에서 상태 관리

export default function Index() {
  // useState 기본 구조
  // const [state, setState] = useState(initialState);

  // state(상태 변수): 현재 상태 값
  // setState(설정 함수): 상태를 업데이트하는 함수
  // initialState: 초기 상태를 설정
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      {/* 
        불변성 유지를 위한 상태 관리
       */}
      <button onClick={() => setCount(prevCount => prevCount - 1)}>감소</button>
    </div>
  )
}
