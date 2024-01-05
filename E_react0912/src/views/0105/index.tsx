import React, { useContext } from 'react'
import ContextApi01 from './a_ContextAPI/ContextApi01'
import ThemeProvider from './a_ContextAPI/ThemeProvider'
import { ThemeContext } from './a_ContextAPI/ThemeContext';

export default function Index() {
  // Context API를 사용한 전역 상태관리
  // ThemeContext를 사용하여 현재 테마 상태를 가져옴
  const { theme } = useContext(ThemeContext);

  // 현재 테마에 따라 배경색 설정
  const backgroundColor = theme === 'light' ? 'white' : 'pink';
  
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h1>0105 리액트 수업 자료</h1>
      <h2>Context API</h2>
      <ContextApi01 />
    </div>
  )
}