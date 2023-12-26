import React, { useRef, useState } from 'react'

//! useRef
// : reference(참조)의 축약어
// : 변경 가능한 참조 객체를 생성
// - 주로 DOM 요소에 직접적으로 접근할 때 사용
// - 렌더링 사이에 지속되는 값을 유지

//? 텍스트 길이 카운팅

export default function UseRef01() {
  const [text, setText] = useState<string>('');
  const [tiem, setTime] = useState<number | null>(null);
  // 텍스트의 길이를 저장하기 위한 useRef
  const lengthRef = useRef(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    // 입력된 텍스트의 길이를 lengthRef에 저장
    lengthRef.current = e.target.value.length;
  }

  return (
    <>
      <h4>현재 텍스트 길이 측정 예제</h4>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange}
      />
      {/* lengthRef를 사용하여 현재 텍스트 길이를 표시 */}
      <p>Text Lenght: {lengthRef.current}</p>

      <h4>useRef를 사용하는 타이머 예제</h4>

    </>
  )
}
