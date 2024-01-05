import React, { useContext } from 'react'
import { ThemeContext} from './ThemeContext'

//! 전역 상태
// : 프로젝트 전체에 영향을 끼치는 상태

// 전역 상태 관리 툴
// Context API, redux, mobX, zustand 등

// Context API
// : React에서 제공하는 전역 상태관리 툴

//? 1. Context 생성 및 설정
// ThemeContext.ts 생성

export default function ContextApi01() {
  // useContext 훅을 사용하여 ThemeContext의 값을 가져옴
  const themeContext = useContext(ThemeContext);

  // themeContext가 없으면 아무것도 렌더링 X
  if (!themeContext) return null;

  // 존재할 경우 버튼을 렌더링
  // : 버튼 클릭 시 themeContext의 toggleTheme 함수를 호출하여 테마 토글
  return (
    <button onClick={themeContext.toggleTheme}>
      {themeContext.theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
