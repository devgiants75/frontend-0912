import React from 'react'

interface UserType {
  name: string;
  age: number;
}

type ChildProps = {
  userInfo: UserType | undefined;
}

//^ 자식 컴포넌트
// const ChildProps01: React.FC<{ userInfo: UserType }> = ({ userInfo }) => {
const ChildProps01 = ({ userInfo }: ChildProps) => {
  return (
    <div>
      {userInfo && (
        <>
          <p>Name: {userInfo.name}</p>
          <p>Age: {userInfo.age}</p>
        </>
      )}
    </div>
  )
}

export default ChildProps01;