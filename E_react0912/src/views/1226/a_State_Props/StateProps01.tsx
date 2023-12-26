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
  // 사용자 입력을 추적하는 상태
  const [userInfo, setUserInfo] = useState<UserType>(initialValue);

  // 최종 제출된 값에 대한 상태
  const [submittedData, setSubmittedData] = useState<UserType | undefined>();

  // 비구조화 할당
  const { name, age } = userInfo; 

  // 입력 값이 변경될 때 호출되는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      // name 키를 가진 값을 value로 설정
      [name]: value
    });
  };

  // 확인 버튼을 눌렀을 때 호출되는 함수
  const handleSubmit = () => {
    // submittedData를 현재 userInfo 값으로 업데이트
    setSubmittedData(userInfo);
  }

  return (
    <>
      <input 
        type="text" 
        placeholder='이름을 입력하세요.'
        onChange={handleInputChange}
        name="name"
        value={name}
      />
      <input 
        type="text" 
        placeholder='나이를 입력하세요.'
        onChange={handleInputChange}
        name='age'
        value={age}
      />
      <button onClick={handleSubmit}>확인</button>
      <ChildProps01 userInfo={submittedData} />
    </>
  )
}
