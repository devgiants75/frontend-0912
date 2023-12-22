import React, { useState } from 'react'

//! 여러 개의 입력 상태 값 처리
// : input에 name을 설정하여 이벤트가 발생했을 때 해당 값을 참조
// : useState에서는 문자열이 아니라 객체 형태의 상태를 관리

interface Input {
  id: string;
  password: string;
}

export default function UseState03() {
  const [inputs, setInputs] = useState<Input>({
    id: '',
    password: ''
  });

  // 비구조화 할당을 통해 값 추출
  const { id, password } = inputs;


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이벤트가 일어난 DOM 요소에서 name과 value를 추출
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤

      [id]: '안녕하세요' // name 키를 가진 값을 value로 설정
    })
  }

  const handleResetClick = () => {

  }

  return (
    <>
      <h5 style={{ backgroundColor: 'black', color: 'white' }}>
        여러 개의 입력 상태 관리
      </h5>
      {/* input의 name속성 */}
      <input 
        type="text" 
        placeholder='아이디' 
        name='id' 
        onChange={handleInputChange}
        value={id}
      />
      <input 
        type="text" 
        placeholder='비밀번호' 
        name='password'
        onChange={handleInputChange}
        value={password}
      />
      <button onClick={handleResetClick}>Reset</button>
      <div>
        아이디 : ()
        비밀번호 : ()
      </div>
    </>
  )
}
