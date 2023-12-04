//! JS/TS의 코드 퀄리티 향상과 스타일 유지를 위한 도구

//? ESLint
// : JS 코드에서 발견된 문제 패턴을 식별하기 위한 정적 코드 분석 도구

// Lint
// : 소스코드를 분석하여 문법적인 오류나 스타일적인 오류,
// : 적절하지 않은 구조 등에 표시를 달아주는 행위

//? 설치 방법
// ESLint 설치 시 npm을 통해 필요한 플러그인(확장) 기능을 설치
// npm install eslint --save-dev

// VSC 코드 에디터의 확장 기능을 사용하여 설치

//? Prettier
// : 특정 프로젝트나 팀의 고유한 코딩 스타일이나 포맷 규칙을 적용하기 위해 사용

// 설치방법
// 플러그인을 통한 설치
// npm install --save-dev --save-exact prettier
// : package.json에 명시하고 싶은 경우

/*
.prettierrc 파일에 설정하여 사용
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
 */