import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

//! React-Router-Dom
// : React 앱에서 클라이언트 사이드 라우팅을 구현하기 위한 라이브러리
// : 사용자가 웹앱 내에서 다른 페이지로 이동할 때, 새로운 페이지를 서버로 부터 로드하는 대신 클라이언트 사이드에서 라우팅처리를 하는 방법

// SPA(싱글 페이지 애플리케이션)구현을 위한 필수적인 도구
// : 하나의 웹 페이지로 구성 > 사용자의 상호작용에 따라 동적으로 콘텐츠를 갱신

// a, b, c, d
// a에서 b로의 이동
// 멀티 페이지 웹 사이트: 전혀 다른 페이지로의 이동
// SPA: 하나의 페이지 내에서 경로(url)만 달리하여 페이지를 전환

//! 라우팅(Routing)
// : 웹앱에서 사용자가 요청하는 url을 화면의 특정 컴포넌트에 연결하는 과정
// ex) 사용자가 www.example.com/about URL을 방문
//     >> About 컴포넌트를 보여주는 것

// - URL 매칭: 사용자가 요청하는 URL과 일치하는 컴포넌트를 지정
// - 네비게이션: 사용자가 다른 URL로 이동할 때의 경로 변경 처리

//! React Router Dom의 주요 컴포넌트
// BrowerRouter: Route 기능을 사용할 제일 루트 단위의 컴포넌트를 묶는 과정
// Route: URL과 렌더링할 컴포넌트를 연결하는 컴포넌트
// Routes: Route 컴포넌트들을 묶어주는 기능
// Link: 사용자가 다른 경로로 네비게이션 할 수 있도록 하는 컴포넌트

//! React Router Dom 설치 및 기본 설정
// npm install react-router-dom

//! 기본 Route들을 묶는 Routes 컴포넌트 사용

//! URL과 컴포넌트 연결하는 Route 작성
//? path속성: App.tsx 연결 시 작성되는 localhost:3000 경로 뒤에 작성되는 url 경로 작성
// ex) /login, /singup, /bookDetail
//? element 속성: 해당 URL과 연결될 컴포넌트 지정
// import로 컴포넌트 전달을 받아야 함
import Home from './pages/home'
import About from './pages/about'

//! Link 컴포넌트 사용
// Link컴포넌트는 다른 경로로의 이동을 위해 사용
// : 페이지 전체를 새로 로드하지 않고 앱 내에서 경로를 변경
//? to속성: 이동할 경로를 지정(문자열 또는 객체)

//! 정적 라우팅
// : 특정 경로(URL)에 특정 컴포넌트를 고정하는 방법
// 애플리케이션의 고정된 페이지 - ex)홈화면, 소개 페이지, 로그인, 로그아웃 등

//! 동적 라우팅
// : URL 매개변수를 사용하여 동적으로 컴포넌트를 렌더링하는 방법
// 같은 구조의 페이지에서 다양한 데이터를 표시할 때 사용
// - ex) 사용자 프로필, 상품 상세 페이지 등

// useParams
// : React Router에서 제공하는 훅(Hooks)
// : URL 매개변수를 객체 형태로 추출할 수 있게 해주는 기능
// : 경로에 지정된 매개변수 값을 컴포넌트 내에서 쉽게 접근하고 사용할 수 있도록 설정
// URL경로에 매개변수 지정 시
// >> :매개변수

// 동적으로 URL 매개변수를 사용하는 컴포넌트
import User from './pages/user';

//! 의존성 설치 (필요한 라이브러리 설치)
// : zustand, json-server, axios
// npm i zustand json-server axios

//? 1. 서버 데이터 파일 생성: json-server 설정
// 프로젝트 루트에 db.json파일 생성

import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <>
      {/* 
        Routes 외에서 작성되는 컴포넌트는
        url경로와 상관없이 react 실행 시 렌더링 
        : header, nav, footer
      */}
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/user/1'>User 1</Link></li>
          <li><Link to='/user/2'>User 2</Link></li>
          <li><Link to='/book'>Book</Link></li>
        </ul>
      </nav>
      <Routes>
        {/* 
          path경로에 /만 지정할 경우 해당 Route의 메인 URL로 연결 
        */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* 동적 컴포넌트 사용 예시 */}
        <Route path='/user/:userId' element={<User />} />

        {/* 책 목록 > 상세페이지 컴포넌트 예시 */}
        <Route path='/book' element={<BookList />} />
        {/* 동적 경로에서 책 상세 페이지 표시 */}
        <Route path='/book/:bookId' element={<BookDetail />} />
      </Routes>
      {/* a화면 - 로그인, 회원가입 */}

      {/* b화면 - 홈화면, 전체 레이아웃 */}
      {/* header */}

      {/* main */}
      {/* Routes: 경로마다 다른 페이지 표시 */}

      {/* footer */}
    </>
  );
}

export default App;
