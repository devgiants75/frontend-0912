import React, { ChangeEvent, useMemo, useState } from 'react'

//! useMemo
// : 성능 최적화를 위해 사용
// : 계산 비용이 높은 함수의 결과값을 메모리에 저장
// : 동일한 입력이 주어질 때 함수 재실행X, 이전에 계산된 값을 재사용

//? 사용 사례
// - 복잡한 계산을 하는 함수의 결과값을 캐싱
// - 렌더링과 관련 없는 계산이나 로직을 처리할 때
// - 렌더링 성능을 최적화할 필요가 있는 컴포넌트

//? 기본 구조
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// memoizedValue: useMemo의 결과값을 가지는 변수
// computeExpensiveValue: 비용이 많이 드는 함수
// [a, b] = 해당 함수의 의존성 배열, 해당 값들이 변경될 때만 함수가 다시 실행

export default function UseMemo() {

  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');

  const expensiveCalculation = (num: number) => {
    return num * 2; // 복잡한 계산을 가정
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <input 
        type="text"
        value={inputValue}
        onChange={handleChange}  
      />
      <button onClick={handleClick}>Increase Count</button>
      <p>Count: {count}, Calculated Value: {memoizedValue}</p>
    </div>
  )
}
