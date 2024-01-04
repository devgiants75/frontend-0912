import React, { useReducer, useState } from 'react'

//! useReducer
// : 컴포넌트 내의 상태 관리 기능
// : 복잡한 state 로직을 관리할 때 효과적
// : 현재의 state와 action을 받아 새로운 state를 반환하는 함수

//? 기본 구조
// (state, action) => newState

type StateType = {
  count: number
}

type ActionType = {
  type: 'increment' | 'decrement';
}

// 상태를 관리하는 리듀서 함수
function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1};
    case 'decrement':
      return { count: state.count - 1};
    default:
      // ActionType에 맞지 않는 경우 오류
      throw new Error();
  }
}

export default function UseReducer01() {
  // useState를 활용한 count 상태 관리
  // const [count, setCount] = useState<number>(0);

  //? useReducer를 활용한 count 상태 관리
  // const [state, dispatch] = useReducer(reducer, initialState);
  // state: 상태를 관리할 변수
  // dispatch: 액션을 발생시키는 함수
  // >> dispatch({ type: 'increment' })

  // useReducer 파라미터
  // : 첫 번째 파라미터 - reducer 함수
  // : 두 번째 파라미터 - 초기 상태
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // 증가 액션 처리
  const increment = () => {
    // setCount(prevCount => prevCount + 1);
    dispatch({ type: 'increment' })
  }

  // 감소 액션
  const decrement = () => {
    // setCount(prevCount => prevCount - 1);
    dispatch({ type: 'decrement' })
  }

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
    </div>
  )
}
