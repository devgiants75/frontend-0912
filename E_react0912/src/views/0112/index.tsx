import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

// 라우팅 설정과 링크를 포함한 기본 앱 컴포넌트
export default function index() {
  return (
    <div>
      <nav>
        {/* 
          Routes 내의 경로와 상관없이 index.tsx화면 경로에서 보여질 화면 

          Link 컴포넌트
          : 리액트에서 SPA을 구현하는 도구
          : 클릭 시 바로 이동하는 로직 구현 시 사용
          ex) 상품 리스트에서 상세 페이지로 이동
        */}
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        {/* 
          localhost:3000/0112 로 이동한 페이지 내의 Route설정
          : 추가 경로 지정
          - 경로 / : 해당 페이지 그 자신
          - 경로 /login : localhost:3000/0112/login
        */}
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}
