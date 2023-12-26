import React from 'react'

// Props에 대한 타입 정의
interface ChildComponentProps {
  userInfo: {
    name: string;
    height: number;
  };
  onUpdate: (newInfo: {name: string; height: number}) => void;
}

//^ 자식 컴포넌트
const ChildProps02: React.FC<ChildComponentProps> = ({ userInfo, onUpdate }) => {

  const updateInfo = () => {
    // 상태 업데이트 로직
    onUpdate({ name: 'lee do kyung', height: 158 });
  }
  return (
    <div>
      <p>Name: {userInfo.name}</p>
      <p>Height: {userInfo.height}</p>
      <button onClick={updateInfo}>Update Info</button>
    </div>
  )
}

export default ChildProps02;