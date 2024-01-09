import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

interface User {
  id: number;
  username: string;
  email: string;
}

export default function Axios02() {
  const [users, setUsers] = useState<User[]>();
  const [newUser, setNewUser] = useState({
    username: '',
    email: ''
  });
  const userIdRef = useRef(5);

  // 서버 메인 경로
  const API_URL = 'http://localhost:5000/users';

  // 사용자 조회
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      let data = response.data;
      if(data) {
        setUsers(data);
      }
    } catch (error) {
      console.log("Error fetching users: ", error);
    }
  }

  // 사용자 생성
  const createUser = async () => {
    if(!newUser.username || !newUser.email) return;

    const newId = ++userIdRef.current;
    try {
      const response = await axios.post(API_URL, {id: newId, ...newUser});
      if (users) {
        setUsers([...users, response.data]);
        setNewUser({username: '', email: ''});
      }
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <input 
        type="text"
        value={newUser.username}
        name='username'
        onChange={(e) => setNewUser({...newUser, username: e.target.value})}
      />
      <input 
        type="text"
        value={newUser.email}
        name='email'
        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
      />

      <button onClick={createUser}>Create User</button>
      {users && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p>Name: {user.username}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
