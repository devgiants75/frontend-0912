import React from 'react'
import { Box, Button, Typography, createTheme } from '@mui/material';
// import Button from '@mui/material';
// import createTheme from '@mui/material';

//! MUI 기본 사용법
// npm을 사용하여 설치
// npm install @mui/material @emotion/react @emotion/styled

// MUI 라이브러리의 컴포넌트를 사용하여 정의
// : 대문자로 시작하는 키워드로 작성

//! MUI 테마 및 디자인 정의
// createTheme 함수를 사용하여 사용자 정의 테마 생성
// ThemeProvider 컴포넌트를 사용하여 메인 컴포넌트에게 전달
// : App 컴포넌트

export const theme = createTheme({
  palette: {
    primary: {
      light: '#7986cb', // 밝은 버전의 기본 색상
      main: '#556cd6', // 기본 색상
      dark: '#303f9f', // 어두운 버전의 기본 색상
      contrastText: '#fff', // 대비되는 텍스트 색상
    },
    secondary: {
      light: '#33ab9f',
      main: '#19857b',
      dark: '#00695f',
      contrastText: '#000',
    },
    // 다른 색상 옵션을 추가
  },
  typography: {
    fontFamily: 'Arial',
    fontSize: 14, // 기본 폰트 사이즈
    h1: {
      fontSize: '2.2rem',
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    }
  },
  spacing: 4, // 기본 간격 단위
  components: {
    MuiButton: { // 버튼 컴포넌트에 대한 스타일
      styleOverrides: {
        root: { // 모든 버튼에 적용될 스타일
          borderRadius: 8,
        }
      }
    }
  },

  // 반응형 디자인을 위한 브레이크 포인트 설정
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
});

//! 스타일 커스터마이징
// sx 속성
// : MUI 컴포넌트의 스타일을 변경 속성
// : 개별 컴포넌트에 사용자 정의 스타일 적용
// - 일반적인 스타일 지정
// : 카멜 케이스 (camelCase) 사용
// - Box Model 관련 공간 지정
// : 유틸리티 속성
// bgcolor (색상 변환)
// m(margin), p(padding)
// >> mt(margin top), mr, mb, ml
// >> pt(padding top), pr, pb, pl

export default function Index() {
  return (
    <>
      <Box style={{ margin: theme.spacing(2)}}>
        <Typography variant='h1' color='primary'>
          안녕하세요 MUI입니다.
        </Typography>
        <Typography variant='body1' color='secondary.dark'>
          Material UI를 사용한 예제입니다.
        </Typography>
        <Button 
          variant='contained' 
          color='primary'
          style={{ margin: theme.spacing(2)}}
        >
          클릭하세요.
        </Button>
        <Button 
          variant='outlined' 
          color='secondary'
          style={{ margin: theme.spacing(2)}}
        >
          더보기
        </Button>
      </Box>

      {/* sx 속성 사용 */}
      <Box 
        sx={{ 
          color: 'primary.contrastText', 
          bgcolor: 'primary.main', 
          width: 100, 
          borderRadius: 8,
          '@media (min-width: 600px)': {width: 250, fontSize: 40},
          '&:hover': {bgcolor: 'primary.light'},
          display: 'flex',
          justiryContent: 'center',
          m: 10,
          p: 10,
          maxWidth: 300,
          maxHeight: 150
        }}>
        This is a box
      </Box>
    </>
  )
}
