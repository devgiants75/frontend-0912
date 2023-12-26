import React, { useState } from 'react'
import ChildProps01 from './ChildProps01';

//! 컴포넌트 트리 안의 상태
//? 상태를 컴포넌트 트리의 아래로 내려보내기
// : 부모 컴포넌트에서 자식 컴포넌트로 상태 전달

//? 상호작용을 컴포넌트 트리 위쪽으로 전달하기
// : 자식 컴포넌트에서 발생한 이벤트를 부모 컴포넌트로 전달

//? 상태(State) VS 속성(Props)
// 상태
// : 컴포넌트 '내부'에서 관리되는 데이터
// : 상태가 변경되면 렌더링을 유발

// 속성
// : 부모 컴포넌트로부터 받은 데이터
// : 읽기 전용

interface UserType {
  name: string;
  age: number;
}

const initialValue: UserType = {
  name: 'LSA',
  age: 28
}

//^ 부모 컴포넌트
export default function StateProps01() {
  const [userInfo, setUserInfo] = useState(initialValue);

  const onChange = () => {
    
  }

  return (
    <>
      <input 
        type="text" 
        placeholder='이름을 입력하세요.'
        onChange={onChange}
      />
      <input 
        type="text" 
        placeholder='나이를 입력하세요.'
        onChange={onChange}
      />
      <ChildProps01 userInfo={userInfo}/>
    </>
  )
}
