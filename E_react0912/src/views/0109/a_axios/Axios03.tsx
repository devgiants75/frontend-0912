import { Button, Container, Divider, List, ListItem, ListItemText, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

//! posts 데이터 생성, 조회, 수정, 삭제

// API_URL 설정
const API_URL = 'http://localhost:5000/posts';

// Post 타입 정의 (id, title, content)
type Post = {
  id: number;
  title: string;
  content: string;
}

export default function Axios03() {
  // 게시물 목록 상태 관리
  const [posts, setPosts] = useState<Post[]>([]);
  // 새로운 게시물 입력 상태 관리
  const [newPost, setNewPost] = useState({
    title: '',
    content: ''
  });
  // 수정 중인 게시물의 ID 상태 관리
  const [editPostId, setEditPostId] = useState<number | null>(null);

  // 컴포넌트 마운트 시 게시물 목록 조회
  useEffect(() =>{
    // 게시물 목록 조회 함수
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(API_URL);
        setPosts(response.data);
      } catch (error) {
        console.log('Error fetching posts', error);
      }
    };

    fetchPosts();
  }, []);

  // 새 게시물 생성 또는 기존 게시물 수정 함수
  const savePost = async () => {
    // 입력 창에 title 또는 content 영역이 비워진 경우 동작 X
    if (!newPost.title || !newPost.content) return;

    try {
      // 수정 중인 게시물의 id X: 생성 단계
      let updatedPost: Post;
      if (editPostId === null) {
        const newId = generateId();
        const response = await axios.post<Post>(API_URL, {id: newId, ...newPost});
        updatedPost = response.data;
      } else {
        const response = await axios.put<Post>(`${API_URL}/${editPostId}`, newPost);
        updatedPost = response.data;
        setEditPostId(null);
      }
      // 각 응답의 data가 존재하는지 확인
      if (updatedPost) {
        setPosts(prevPosts => {
          // 새 게시물이면 추가, 기존 게시물이면 갱신
          const updatedPosts = prevPosts.filter(post => post.id !== updatedPost.id);
          return [...updatedPosts, updatedPost];
        });
      }
      setNewPost({ title: '', content: ''});

    } catch(error) {
      console.log('Error saving post', error);
    }
  }

  // 게시물 수정을 위한 함수
  const handleEditPost = async (post: Post) => {
    setNewPost({ title: post.title, content: post.content});
    setEditPostId(post.id);
  }

  // 게시물 삭제를 위한 함수
  const handleDeletedPost = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch(error) {
      console.log(error);
    }
  }

  // 새 게시물 ID 생성 함수 
  const generateId = () => {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
  }

  return (
    <Container>
      {/* 게시물 제목 입력 필드 - input */}
      <TextField 
        label="Post Title"
        value={newPost.title}
        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
        fullWidth
        margin='normal'
      />
      {/* 게시물 내용 입력 필드 - input */}
      <TextField 
        label="Post Content"
        value={newPost.content}
        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
        fullWidth
        margin='normal'
      />
      {/* 게시물 생성/수정 버튼 */}
      <Button onClick={savePost} variant='contained' color='primary'>
        {editPostId === null ? 'Create Post' : 'Update Post'}
      </Button>
      {/* 게시물 목록 표시 */}
      <List>
        {posts.map(post => (
          <>
            <ListItem key={post.id}>
              <Button onClick={() => handleEditPost(post)} color='primary'>Edit</Button>
              <Button onClick={() => handleDeletedPost(post.id)} color='secondary'>Delete</Button>
            </ListItem>
            <ListItemText primary={post.title} secondary={post.content} />
            <Divider />
          </>
        ))}
      </List>

    </Container>
  )
}
