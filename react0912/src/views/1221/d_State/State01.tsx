import React, { useState } from 'react'

//! 훅(Hooks)
// : 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 기능
// : 형태 (use-: -한 기능을 사용한다.)

//! useState 훅
// : '상태 관리' 기능
// >> 컴포넌트의 '메모리', 사용자의 상호작용이나 데이터 변화에 따라 동적으로 변화하는 데이터

// +1 버튼 클릭 시 count 변수가 1씩 증가
// -1 버튼 클릭 시 count 변수가 1씩 감소
function Counter() {
  //? useState를 사용한 상태 관리
  // : 상태의 기본값을 인자로 받고, 상태 변수와 그 상태를 설정하는 함수를 반환

  // 기본문법
  // : const [state, setState] = useState<stateType>(initialValue);
  
  // - state: 현재 상태값(변수)
  // - setState: 상태를 업데이트하는 함수
  // - initialValue: 초기 상태값
  const [count, setCount] = useState<number>(0);

  //? 이벤트 설정
  // : 버튼이 클릭되는 이벤트가 발생 했을 때, 특정 함수가 호출되도록 설정

  const onIncrease = () => {
    // console.log('+1');
    // 상태 업데이트는
    // : setCount 함수를 사용하여 상태를 업데이트
    setCount(count + 1);
  }

  const onDecrease = () => {
    // console.log('-1');
    setCount(count - 1);
  }

  return (
    <>
      <h4>{count}</h4>
      {/* 
        함수 호출X / 함수 전달O 
        : 리액트에서 엘리먼트에 이벤트 설정 시
        : on이벤트이름={실행하고싶은함수} 형태로 설정 (함수 실행 X)
      */}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}

export default function State01() {
  return (
    <div style={{backgroundColor: '#ccc'}}>
      <Counter />
    </div>
  )
}
