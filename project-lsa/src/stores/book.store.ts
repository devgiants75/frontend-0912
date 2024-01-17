import axios from "axios";
import { create } from "zustand";

// 책 데이터 타입 정의
interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

// Zustand 스토어 상태 타입 정의
interface BookState {
  books: Book[];
  fetchBooks: () => void;
}

export const useBookState = create<BookState>((set) => ({
  books: [], // 초기 책 목록 상태는 빈 배열
  fetchBooks: async () => {
    // Axios를 사용하여 데이터 가져오기
    const response = await axios.get('http://localhost:5000/books'); 
    // 상태 업데이트
    set({books: response.data })
  }
}))