import React, { useState } from "react";
import { useStore } from "./Zustand01";
import { create } from "zustand";

//! 상태 정의 및 스토어 생성
// 회원 정보 상태 & 사용자 인증 상태

//! UI 컴포넌트
// 회원 관리 컴포넌트 - 회원 목록 표시, 회원 추가, 수정, 삭제 기능
// 로그인 컴포넌트
// 홈 화면 컴포넌트 - 로그인 후 보여질 홈 화면

//^ 상태 관리
// 회원 정보 정의
interface Member {
  id: number;
  name: string;
}

// 회원 상태 정의
interface MemberState {
  members: Member[]; // 회원 목록을 저장하는 배열
  addMember: (member: Member) => void; // 회원 추가
  updateMember: (id: number, name: string) => void; // 특정 회원을 업데이트
  deleteMember: (id: number) => void; // 특정 회원을 삭제
}

const useMemberStore = create<MemberState>((set) => ({
  // 초기 상태 설정
  members: [],
  addMember: (member) =>
    set((state) => ({
      members: [...state.members, member],
    })),
  updateMember: (id, name) =>
    set((state) => ({
      members: state.members.map((member) =>
        member.id === id ? { ...member, name } : member
      ),
    })),
  deleteMember: (id) =>
    set((state) => ({
      members: state.members.filter((member) => member.id !== id),
    })),
}));

//^ 사용자 인증을 관리하는 Zustand 스토어

interface AuthState {
  user: string | null; // 현재 로그인한 사용자
  login: (user: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }), // 로그인 상태 설정
  logout: () => set({ user: null }), // 로그아웃 상태 설정
}));

// 로그인 컴포넌트
const Login = () => {
  const login = useAuthStore((state) => state.login);
  const [username, setUserName] = useState("");

  const handleLogin = () => {
    login(username);
  };

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export function MemberManager() {
  // Zustand01에서 생성한 useStore에 있는
  // 카운트 변수, 증가, 감소 버튼
  const { count, increment, decrement } = useStore();

  //^ useMemberState를 사용한 회원 관리 컴포넌트
  const { members, addMember, updateMember, deleteMember } = useMemberStore();

  // 수정할 이름에 대한 상태 관리 (input)
  const [newName, setNewName] = useState<string>();
  // 새로운 회원에 대한 상태 관리 (input)
  const [newMemberName, setNewMemberName] = useState<string>();

  const handleAddMember = () => {
    if (newMemberName) {
      const newMember = { id: Date.now(), name: newMemberName };

      addMember(newMember);
      setNewMemberName("");
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>

      <hr />
      <input
        type="text"
        value={newMemberName}
        onChange={(e) => setNewMemberName(e.target.value)}
        placeholder="Enter member name"
      />
      <button onClick={handleAddMember}>Add Member</button>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name}
            <input
              type="text"
              // value={newNames}
              onChange={(e) => setNewName(e.target.value)}
            />

            <button onClick={handleUpdateMember(member.id)}>수정</button>
            <button onClick={() => deleteMember(member.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 메인 컴포넌트
// 로그인 된 회원이 존재하지 않는 경우
// : login 화면 만을 출력

// 로그인된 회원이 존재하는 경우
// : login 화면 출력X
// : 로그아웃 버튼 / 회원 정보 관리 페이지가 생성

export default function Zunstand02() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <p>Welcome, {user}</p>
      <button onClick={logout}>Logout</button>
      <MemberManager />
    </>
  );
}
