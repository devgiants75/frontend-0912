import React, { useEffect, useState } from 'react'

//! 부수 효과(Side Effects)
// : 컴포넌트의 '주요 기능' 외에 발생하는 작업
// : API호출, 이벤트 리스너 등록, 수동 DOM 조작 등

//! useEffect
// : 함수 컴포넌트에서 부수 효과를 수행하기 위한 Hook
// : 데이터 가져오기, 구독 설정, 수동으로 DOM 변경 등의 작업
// : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정 가능

//? 리액트 컴포넌트의 라이프 사이클 
// 마운팅: 컴포넌트가 DOM에 삽입되는 단계
// 업데이트: props 또는 state의 변경으로 컴포넌트가 재렌더링되는 단계
// 언마운팅: 컴포넌트가 DOM에서 제거되는 단계

//? useEffect와 라이프 사이클
// 마운팅과 업데이트에서 실행할 코드 관리
// 의존성 배열(deps)을 사용하여 업데이트 시 동작을 제어
// 반환되는 함수는 언마운팅 시 호출되어 정리작업에 사용

export default function UseEffect01() {

  // useEffect 기본 구조
  // 첫 번째 인자: 부수 효과를 수행하는 함수(콜백 함수)
  // 두 번째 인자: 의존성 배열 
    // - 해당 배열의 값이 변경될 때 마다 효과가 다시 실행 
    
    // - 배열이 비워져 있는 경우 컴포넌트가 마운트 될 때 한 번만 실행
    // -- 정리 함수가 있다면(return 반환) 언마운트 시 단 한번만 실행
  const [count, setCount]  = useState<number>(0);

  useEffect(() => {
    console.log('+1 증가 되었습니다.');

    const handleChange = () => {
      // 변화가 일어날 때 실행될 코드
      console.log('창 크기 변화 감지');
    }

    // 정리 함수(Cleanup 함수)
    // : 선택적으로 정리 함수 반환이 가능
    // : 주로 이벤트 리스너 제거, 구독 취소 등 정리 작업에 사용
    return () => {
      // 창 화면의 창 크기가 변경 되면 handleChange함수의 이벤트를 제거
      window.removeEventListener('resize', handleChange);
    }
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}
