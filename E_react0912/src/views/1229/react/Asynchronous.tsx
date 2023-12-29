import React, { useEffect, useState } from 'react'

// jsonplaceholder의 posts 데이터를 비동기함수 가져오기
// - 해당 상태를 관리
// - 화면에 렌더링

// 각각의 게시물의 타입 정의
type Post = {
  id: number;
  title: string;
  body: string;
}

export default function Asynchronous() {
  // 게시물 상태 및 초기값 지정([])
  const [posts,  setPosts] = useState<Post[]>([]);

  // 로딩 상태 관리
  const [loading, setLoading] = useState<boolean>(true);

  // 에러 상태 관리
  const [error, setError] = useState<string | null>(null);

  //! 데이터를 불러오는 비동기 함수
  async function fetchPosts() {
    try {
      // API 통신
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      // 응답이 정상이 아니라면 오류
      if (!response.ok) {
        // 강제로 에러를 발생
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      // 응답이 정상적으로 존재한다면 JSON 형태로 데이터 반환
      const data = await response.json();
      // 데이터 상태 업데이트
      setPosts(data);
      // 로딩 상태 업데이트
      setLoading(false);
    } catch (error) {
      // 에러 상태 업데이트
      setError((error as Error).message);
      // 로딩 상태 업데이트
      setLoading(false);
    }
  }

  // 컴포넌트가 마운트될 때 데이터를 불러오기
  useEffect(() => {
    fetchPosts();
  }, []);

  // 로딩 중 화면 표시
  if (loading) {
    return <div>Loading Posts</div>
  }

  // 에러 발생 시 화면 표시
  if (error) {
    return <div>Error: {error}</div>
  }

  // 게시물 목록 렌더링
  return (
    <div>
      <h3>Posts</h3>
      {/* 
        순서가 없는 태그 내에 
        h4태그에 post의 제목을
        p태그에 body를 작성
      */}
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
