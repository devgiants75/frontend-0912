import React, { useEffect, useState } from 'react'
import { useInput } from '../hooks/useInput';
import { Button, Container, IconButton, List, ListItem, ListItemText, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Delete';

interface Todo {
  text: string;
  id: number;
}

//! MUI 컴포넌트
// 버튼, 텍스트 필드, 카드 등 React에서 사용되는 컴포넌트
// 레이아웃 및 그리드 시스템
export default function Framework() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const newTodo = useInput('');

  // Todo 추가
  const addTodo = () => {
    if (newTodo.value) {
      setTodos([...todos, { text: newTodo.value, id: Date.now() }]);
      newTodo.onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Todo 삭제
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Todo 목록 로컬 스토리지에 저장
  useEffect(() => {
    const storedData = localStorage.getItem("todos");
    const storedTodos = storedData ? JSON.parse(storedData) : [];
    setTodos(storedTodos);
  }, []);

  // Todo 목록 변경시 로컬 스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container maxWidth="sm">
      <h1>Todos</h1>
      <TextField
        label="Add new todo"
        variant="outlined"
        fullWidth
        {...newTodo}
      />
      <Button variant="contained" color="primary" onClick={addTodo}>
        Add
      </Button>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => {
                    // 수정 로직
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}