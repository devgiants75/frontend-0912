import axios from 'axios';
import React, { useEffect, useState } from 'react'

//! 서버없는 프론트엔드 프로젝트를 위한 
// mock server & mock data 만들기
// : 실제 서버 응답을 모방하고 백엔드 서버가 준비되지 않았을 때 사용하는 하드코딩된 데이터

// mock server(JSON Server) 설치 및 설정
// : npm install -g json-server
// : npm install -D json-server

// db.json 파일 생성
// : Mock Data 입력

// JSON Server 실행
// : 'http://localhost:3001/' 에서 API가 실행
// : json-server --watch db.json --port 3001

// >> 포트번호 생략 시 기본 3000포트로 지정

// API 호출을 위한 Axios 설치
// : npm install axios

// API 호출로 가져올 응답 데이터에 대한 타입 정의
interface User {
  id: number;
  username: string;
  email: string;
}

export default function Mock01() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
      })
  }, []);

  return (
    <div>
      {users.map(user => (
        <>
          <h2>{user.username}</h2>
          <p>{user.email}</p>  
        </>
      ))}
    </div>
  )
}
