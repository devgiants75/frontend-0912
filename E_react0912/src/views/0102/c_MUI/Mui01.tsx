import React from 'react'
import { Box, Typography } from '@mui/material';

//! MUI(Materail-UI)
// : 리액트에서 사용하는 UI 라이브러리 
//   (디자인 컴포넌트)

//? MUI 사용방법
// 1. 설치
// npm install @mui/material @emotion/react @emotion/styled

// 2. 핵심 컴포넌트 사용


export default function Mui01() {
  return (
    <>
      {/* heading 태그로 마크업 */}
      <Typography variant="h1">Heading1</Typography>
      <Typography variant="h2">Heading2</Typography>
      <Typography variant="h3">Heading3</Typography>
      {/* p 태그로 마크업 */}
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>

      {/* h1 태그로 마크업, 텍스트 크기는 h4 */}
      <Typography component="h1" variant="h4">
        Title
      </Typography>

      <Typography color="primary">Primary</Typography>
      <Typography color="secondary">Secondary</Typography>
      <Typography color="textPrimary">Heading3</Typography>
      <Typography color="textSecondary">body1</Typography>
    </>
  );
}
