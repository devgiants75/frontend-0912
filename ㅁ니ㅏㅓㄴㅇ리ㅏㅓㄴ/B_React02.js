/* 리액트 환경설정

! 웹팩(Webpack)과 바벨(Babel)

? 웹팩(Webpack)
: 모듈(주로 JS 파일) 번들러
: Bundler(번들러) - 여러 개로 모듈화된 JS 파일을 하나로 합치는 기능의 도구

- 로더(Loader)
  : 웹팩은 오직 JS와 JSON으로 구성된 파일만 읽고 변환
  : 로더는 다른 유형의 파일(CSS, 이미지 등)을 처리하고 웹팩이 이해할 수 있는 형태로 변환

? 바벨(Babel)
: JS 컴파일러, 최신 ES6+ 코드를 이전 버전 ES5로 변환하여 브라우저 호환성을 개선

! CRA (Create React App)
: 리액트 기반 프로젝트를 쉽게 설정할 수 있는 환경 구축 도구(보일러플레이트)
: 복잡한 환경 설정 없이 리액트 프로젝트를 설치

? 리액트를 CRA로 설치하기 전 필수 사항
- Node.js 설치
- npm 설치
- 코드 IDE 툴 (VSCode)

? 설치
- CRA 페이지 접속 > Get Started > template 설정

npx create-react-app react0912 --template typescript

? CRA으로 설치된 React 폴더 구조
^ node_modules
: 프로젝트에서 사용하는 외부 라이브러리와 종속성들이 설치되는 폴더
: package.json 파일에 기록된 모듈들이 저장

- 리액트의 경우 외부 라이브러리를 많이 사용하기 때문에 용량이 큼
- 대부분 git에 업로드할 때 관리되지 않도록 설정됨
- 해당 프로젝트를 클론한 경우 'npm install'을 사용하여 필요한 모듈들을 재설치

? node_modules 깃 업로드 방지 방법
: 최상위 디렉토리에 .gitignore 파일을 생성
: 업로드 하고 싶지않은 파일의 확장자 또는 파일명을 작성

: # node_modules 파일 무시 (주석)
: node_modules/
: 별/node_modules

*/