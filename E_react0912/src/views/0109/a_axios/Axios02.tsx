import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface User {
  id: number;
  username: string;
  email: string;
}

export default function Axios02() {
  const [users, setUsers] = useState<User[]>();

  // 서버 메인 경로
  const API_URL = 'http://localhost:5000/users';

  // input Change Handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }


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

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <input 
        type="text"
        value={newUser.username}
        name='username'
        onChange={handleInputChange}
      />
      <input 
        type="text"
        value={newUser.email}
        name='email'
        onChange={handleInputChange}
      />
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
