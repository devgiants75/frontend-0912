import React, { useState } from 'react'

//! 리액트와 일반 TS의 차이
// 간단한 카운터 예제
// : UI 컴포넌트가 클래스 또는 함수 형태로 작성
// : 함수형 컴포넌트 사용을 권장
// : 컴포넌트를 기반으로 UI와 상태관리를 쉽게 구현

export default function React02() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
