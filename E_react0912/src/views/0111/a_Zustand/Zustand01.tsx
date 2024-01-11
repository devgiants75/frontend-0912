import React from 'react'
import { create } from 'zustand';

//! Zustand 상태관리 프로그램
// : React Hooks를 기반
// : 최소한의 API를 사용하여 상태를 쉽게 생성하고 접근
// : 상태를 단일 저장소 store에 저장, 해당 store를 가져와서 컴포넌트에 자동으로 업데이트 전달

//? Zustand의 장점
// - 간결성: 최소한의 코드로 상태 관리 가능
// - 유연성: 여러 상태 조각들을 하나의 저장소에서 결합

//? 다른 상태 라이브러리와의 차이점
// Zustand: 직관적인 API, 학습곡선 낮음
// Redux: 엄격한 데이터 흐름과 불변성 유지 가능, 공개된 소스코드 많음, 학습곡선 높음
// MobX: 반응형 프로그래밍을 기반, 상태 변경 시 자동으로 컴포넌트를 업데이트

//? Zustand 사용법
// 설치
// : npm install zustand

//? Zustand 예시 코드
// - 폴더/파일 단위의 분리 X

//^ 1. store 생성
// store
// : 애플리케이션의 상태를 저장하는 곳
// : create 함수를 사용하여 생성
// : 애플리케이션의 상태와 상태를 업데이트 하는 함수들이 포함

//* State의 타입 선언
// : 카운트 상태 저장
interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

//* create 함수의 파라미터에 함수 형태로 state의 초기값과 state를 변경하는 함수를 선언
// zustand에서는 set함수를 사용하여 상태를 업데이트
export const useStore = create<CountState>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1})),
  decrement: () => set(state => ({
    count: state.count - 1}))
}));

function Component() {
  const {count, decrement} = useStore();

  return (
    <>
      <p>{count}</p>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default function Zustand01() {

  //* 상태(State)
  // : 애플리케이션의 현재 상황을 나타내는 데이터
  //* 액션(Action)
  // : 상태를 변경하는 함수
  // : set 함수를 사용하여 상태 업데이트

  // store에 있는 속성 중 사용할 속성을
  // , 구조분해할당으로 가져옴
  const { count, increment } = useStore();

  // store의 원하는 특정 부분만 선택하여 사용
  const otherCount = useStore(state => state.count);
  const otherIncrement = useStore(state => state.increment);

  return (
    <div>
      <Component />
      <p>{count}</p>
      <p>{otherCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={otherIncrement}>OtherIncrement</button>
    </div>
  )
}
