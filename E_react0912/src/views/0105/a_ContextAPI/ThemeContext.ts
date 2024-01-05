import { createContext } from 'react'

//! Context 생성
// : React.createContext(기본값) 함수를 사용하여 새로운 Context 생성

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  // 전역 상태 관리될 theme의 상태 정의
  theme: Theme;
  // 테마를 토글하는 함수를 정의
  toggleTheme: () => void;
}

//? ThemeContext 생성
// : Provider를 통해 실제 값을 제공받음
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//! 생성된 Context에 값을 제공하기 위해서
// Context.Provider 컴포넌트를 사용
// : 해당 컴포넌트는 value 속성을 통해 전달되는 값을 자식 컴포넌트가 접근할 수 있도록 관리