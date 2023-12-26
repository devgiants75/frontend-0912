import React, { useRef, useState } from 'react'

//! useRef
// : reference(참조)의 축약어
// : 변경 가능한 참조 객체를 생성
// - 주로 DOM 요소에 직접적으로 접근할 때 사용
// - 렌더링 사이에 지속되는 값을 유지

//? 텍스트 길이 카운팅

export default function UseRef01() {
  const [text, setText] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  //! 텍스트 길이 측정 함수
  // 텍스트의 길이를 저장하기 위한 useRef
  const lengthRef = useRef(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    // 입력된 텍스트의 길이를 lengthRef에 저장
    lengthRef.current = e.target.value.length;
  }

  //! 타이머 구현 함수
  // 타이머의 간격(인터벌) ID를 저장
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    // 이미 타이머가 실행 중이면 추가적으로 시작하지 않도록 설정
    if (intervalRef.current !== null) return;

    intervalRef.current = window.setInterval(() => {
      // 매 초마다 time 상태를 1씩 증가
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      // 타이머 정지
      clearInterval(intervalRef.current);
      // 인터벌 참조 초기화
      intervalRef.current = null;
    }
  }

  const resetTimer = () => {
    // 초기화 버튼이 눌러지면
    // 1. 카운팅되고 있는 경우
    //  - 카운터가 종료되고
    //  - 시간이 0으로 초기화

    // 2. 카운팅되고 있지 않은 경우
    // -  시간을 0으로 초기화

    // 타이머가 실행 중이라면 정지
    stopTimer();
    // 시간을 0으로 초기화
    setTime(0);
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
      {/* 현재 시간 표시 */}
      <p>Time: {time} seconds</p>
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>종료</button>
      <button onClick={resetTimer}>초기화</button>
    </>
  )
}
