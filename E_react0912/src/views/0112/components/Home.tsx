import React from 'react'
import { useUserStore } from '../store/useUserStore';

// 홈화면 컴포넌트
// : 로그인한 사용자의 정보를 표시
export default function Home() {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <h1>Home</h1>
      {/* 
        jsx/tsx에서 괄호의 사용 목적
        소괄호: JS 내에서 HTML 요소 사용 시
        중괄호: HTML 요소 내에서 JS를 사용하기 위함
      
        if (조건) { 실행할 로직 }
        >> 삼항연산자
      */}
      {user 
        ? <p>Welcome, {user.name}</p>
        : <p>확인된 유저가 없습니다.</p>}
      {user && <p>Welcome, {user.name}</p>}
    </div>
  )
}
