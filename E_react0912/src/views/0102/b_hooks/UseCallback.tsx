import React, { useCallback, useState } from 'react'

//! useCallback
// : 함수를 메모리에 저장하여 컴포넌트가 리렌더링 될 때마다 동일한 함수를 재생성하는 것을 방지

//? 사용 사례
// - 자식 컴포넌트에 함수를 props로 전달할 때
// - 함수의 참조 일관성을 유지할 때
// - 불필요한 리렌더링을 최소화할 때

//? 기본 구조
// const memoizedCallback = useCallback(() => {
//    doSomething(a, b);
// }, [a, b]);

// doSomething(a, b): 메모리에 저장될 함수
// [a, b]: 의존성 배열

//! useMemo와 useCallback 차이점
// useMemo: 값(value)을 캐싱할 때 사용, 복잡한 계산의 결과 등을 저장
// useCallback: 함수(function)을 캐싱할 때 사용, 함수의 재생성을 방지

// 자식 컴포넌트
const ChildComponent: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={onClick}>Click me</button>
)

// 부모 컴포넌트
export default function UseCallback() {
  const [count, setCount] = useState<number>(0);

  // 부모 컴포넌트가 리렌더링될 때 마다
  // , handleClick 함수가 재생성되는 것을 방지
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  )
}
