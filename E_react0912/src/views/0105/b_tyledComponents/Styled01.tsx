import React from 'react'
import styled from 'styled-components'

//! Styled-components
// : JS와 CSS를 결합하는 라이브러리
// : React 컴포넌트 내부에서 CSS 코드를 작성 가능하도록 하는 기능

//? 설치
// npm install styled-components

//? 기본 설정 및 사용법
// 컴포넌트 생성
// 스타일컴포넌트의 styled를 임포트하고
// , HTML 태그에 해당하는 스타일 컴포넌트를 정의

// 글로벌 스타일 정의
// : createGlobalStyle을 사용하여 전역 스타일 생성

// 변수를 사용한 CSS 스타일 지정
// 스타일 관련 값을 변수로 정의
const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
}

const fontSize = {
  small: '0.8rem',
  medium: '1rem',
  large: '1.2rem'
}

const StyledButton = styled.button`
  background-color: ${colors.primary};
  font-size: ${fontSize.large};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.success};
  }
`;

export default function Styled01() {
  return (
    <div>
      <StyledButton>Button</StyledButton>
    </div>
  )
}
