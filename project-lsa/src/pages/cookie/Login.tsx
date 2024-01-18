import axios from 'axios';
import React, { useState } from 'react'
import { useAuthStore } from './store';
import { useCookies } from 'react-cookie';

const API_URL = 'http://localhost:5000';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['token']);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/users`, {userId, password});
      useAuthStore.getState().setToken(response.data.token);
      setCookie('token', response.data.token, { path: '/'});
    } catch(error) {
      console.error(error);
    }
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <input 
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}  
        />
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
        />
        <button type='submit'>로그인</button>
      </form>
    </>
  )
}
