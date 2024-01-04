import React, { useReducer, useState } from 'react'
import { reducer, initialState } from './Reducer';
import { useInput } from '../hooks/useInput';

//! useState, useReducer 차이
// useState: 단순한 값, 객체, 배열을 관리
// >> 컴포넌트의 로컬 상태를 선언할 때 사용

// useReducer: 복잡한 상태 로직을 관리
// >> 상태 업데이트 로직을 컴포넌트 외부에서 작성 가능 - 로직의 재사용을 가능

// 메인 컴포넌트
export default function UseReducer02() {
  // useReducer를 사용한 todos 상태관리
  // state는 상태로 관리 될 todo list
  // : dispatch는 useReducer 훅에서 반환되는 두 번째 값
  const [state, dispatch] = useReducer(reducer, initialState);

  const newTodo = useInput('');
  // const [newTodoText, setNewTodoText] = useState<string>('');

  const editTodoText = useInput('');
  // 수정된 텍스트
  // const [editText, setEditText] = useState<string>('');
  // 수정이 되었는지 여부를 확인하는 상태 관리
  const [isEditing, setIsEditing] = useState<number | null>(null);

  // 새 Todo 항목을 추가하는 함수
  const addTodo = () => {
    if (newTodo.value.trim() !== '') {
      dispatch({ type: 'ADD_TODO', text: newTodo.value });
      // setNewTodoText('');
      newTodo.onChange({ target: {value: ''}} as React.ChangeEvent<HTMLInputElement>);
    }
  }

  //, Todo 항목을 수정하는 함수
  const editTodo = (id: number, text: string) => {
    if(editTodoText.value.trim() !== '') {
      dispatch({ type: 'EDIT_TODO', id, text: editTodoText.value });
      setIsEditing(null);
      editTodoText.value = '';
    }
  }

  // UI 렌더링
  return (
    <>
      <input 
        type="text"
        {...newTodo}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            {isEditing === todo.id ? (
              <input 
                type="text"
                {...editTodoText}
              />
            ) : (
              todo.text
            )}
            {isEditing === todo.id ? (
              <button onClick={() => editTodo(todo.id, editTodoText.value)}>Save</button>
            ) : (
              <button onClick={() => {
                setIsEditing(todo.id);  editTodoText.onChange({ target: {value: ''}} as React.ChangeEvent<HTMLInputElement>);
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
