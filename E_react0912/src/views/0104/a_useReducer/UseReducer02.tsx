import React, { useReducer, useState } from 'react'
import { reducer, initialState } from './Reducer';

// 메인 컴포넌트
export default function UseReducer02() {
  // useReducer를 사용한 todos 상태관리
  // state는 상태로 관리 될 todo list
  // : dispatch는 useReducer 훅에서 반환되는 두 번째 값
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodoText, setNewTodoText] = useState<string>('');
  // 수정된 텍스트
  const [editText, setEditText] = useState<string>('');
  // 수정이 되었는지 여부를 확인하는 상태 관리
  const [isEditing, setIsEditing] = useState<number | null>(null);

  // 새 Todo 항목을 추가하는 함수
  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', text: newTodoText });
    setNewTodoText('');
  }

  //, Todo 항목을 수정하는 함수
  const editTodo = (id: number, text: string) => {
    dispatch({ type: 'EDIT_TODO', id, text });
    setIsEditing(null);
    setEditText('');
  }

  // UI 렌더링
  return (
    <>
      <input 
        type="text"
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            {isEditing === todo.id ? (
              <input 
                type="text"
                value={editText}
                onChange={e => setEditText(e.target.value)}
              />
            ) : (
              todo.text
            )}
            {isEditing === todo.id ? (
              <button onClick={() => editTodo(todo.id, editText)}>Save</button>
            ) : (
              <button onClick={() => {
                setIsEditing(todo.id);  setEditText(todo.text);
              }}>Edit</button>
            )}
            <button 
              onClick={() => 
                dispatch({ type: 'REMOVE_TODO', id: todo.id})}
            >Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}
