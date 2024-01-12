import React, { useState } from 'react'
import { useUserStore } from '../store/useUserStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // 페이지 간에 상태 이동 || 전역에서 상태 관리
  // : 전역 상태 라이브러리(zustand)

  // 컴포넌트 내에서 '상태' 관리
  // : useState
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // json-server에 로그인 요청
      const response = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);

      const users = response.data;

      // 사용자가 존재하면 상태에 저장하고 홈 화면으로 이동
      if (users.length > 0) {
        setUser({ name: users[0].name, id: users[0].id});
        // 해당 
        navigate('/0112');
      } else {
        // 사용자 존재 X
        alert('Invalid username or password');
      }

    } catch (error) {
      // 사용자가 존재하지 않을 경우
      console.error('Login failed: ', error);
      alert('Login failed');
    }
  }


  return (
    <div>
      <h1>Login</h1>

      <input 
        type="text" 
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
