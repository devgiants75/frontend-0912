import React, { useEffect } from 'react'
import { useBookState } from '../../stores/book.store'
import { Link } from 'react-router-dom';

// 책 목록 컴포넌트
export default function Index() {
  // Zustand 스토어에서 책 목록과 데이터 목록을 가져오는 함수 사용
  const { books, fetchBooks } = useBookState();

  useEffect(() => {
    fetchBooks();
    console.log('fetch 성공');
  }, [fetchBooks]);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
