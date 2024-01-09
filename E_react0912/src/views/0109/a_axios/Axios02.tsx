import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
}

export default function Axios02() {
  const [users, setUsers] = useState<User[]>();
  // input에서 받아오는 값에 대한 상태 관리
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
  });
  const userIdRef = useRef(5);

  // 서버 메인 경로
  const API_URL = "http://localhost:5000/users";

  

  // 사용자 생성
  const createUser = async () => {
    // 사용자의 입력 내용이 없을 경우에는 전송 X
    if (!newUser.username || !newUser.email) return;

    // 새로운 데이터의 id값 생성
    const newId = ++userIdRef.current;

    try {
      // post(경로, 새로입력될데이터): 데이터 생성
      const response = await axios.post(
        // {id, username, email}
        API_URL,
        { id: newId, ...newUser }
      );
      if (users) {
        // db.json에 새로운 데이터 입력
        setUsers([...users, response.data]);
        // input창 초기화
        setNewUser({ username: "", email: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 사용자 삭제
  // ex) http://localhost:5000/users/1
  const deleteUser = async (id: number) => {
    const userExists = users?.some((user) => user.id === id);
    if (!userExists) {
      console.log("해당 id를 가진 user가 없습니다.");
      return;
    } else {
      console.log("존재합니다.");
    }
    try {
      await axios.delete(`${API_URL}/${id}`);
      if (users) {
        setUsers(users.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  useEffect(() => {
    // 사용자 조회
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      let data = response.data;
      // users의 상태에 따라 data전달에 방해가 있으면 X
      setUsers(data); 
    } catch (error) {
      console.log("Error fetching users: ", error);
    }
  };  
  fetchUsers();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={newUser.username}
        name="username"
        onChange={handleInputChange}
      />
      <input
        type="text"
        value={newUser.email}
        name="email"
        onChange={handleInputChange}
      />

      <button onClick={createUser}>Create User</button>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Name: {user.username}</p>
              <p>Email: {user.email}</p>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
