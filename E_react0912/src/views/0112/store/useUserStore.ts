
// 사용자 상태 관리를 위한 zustand 스토어

import { create } from "zustand";

export interface User {
  name: string;
  id: number;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))