import React, { ReactNode, useState } from 'react'
import { Theme, ThemeContext } from './ThemeContext';

// ThemeProvider 컴포넌트 정의
// : Context의 Provider 역할
// : 자식 컴포넌트들에게 테마 상태를 제공
export default function ThemeProvider({children}: { children: ReactNode }) {
  // theme 상태를 'light'로 초기화
  const [theme, setTheme] = useState<Theme>('lightblue');

  // toggleTheme 함수 정의
  // : 현재 테마 상태에 따라 테마를 전환
  const toggleTheme = () => {
    setTheme(current => (current === 'lightblue' ? 'pink' : 'lightblue'));
  }

  // ThemeContext.Provider를 사용하여
  // theme와 toggleTheme를 자식 컴포넌트에 전달
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
