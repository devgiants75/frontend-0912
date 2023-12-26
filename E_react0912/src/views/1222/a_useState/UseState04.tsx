import React, { useState } from 'react'

export default function UseState04() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [isVisiable, setIsVisibale] = useState<boolean>(false);
  const [user, setUser] = useState<{ id: number; name: string}>({id: 0, name: ''});
  const [items, setItems] = useState<string[]>([]);

  // 사용자 정보 수정을 위한 핸들러
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // 아이템 목록에 새 아이템 추가를 위한 핸들러
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  }

  return (
    <>
      <h5 style={{ backgroundColor: 'black', color: 'white' }}>여러 타입의 상태 관리</h5>
      {/* 숫자형: 카운터 증가 버튼 */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button> <br />

      {/* 문자열: 사용자 이름 입력 필드 */}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />

      {/* 논리형: 토글 버튼 */}
      <button onClick={() => setIsVisibale(!isVisiable)}>Toggle Visibility</button> <br />

      {/* 객체 상태: 사용자 정보 수정 입력 필드 */}
      <input 
        type="text"
        name='name'
        value={user.name}
        onChange={handleUserChange}
        placeholder='User Name'
      /> <br />

      {/* 아이템 추가 버튼 */}
      <button onClick={addItem}>Add Item</button>

      {/* 상태 표시 */}
      <div>
        <p>Count: {count}</p>
        <p>Name: {name}</p>
        <p>Visibility: {isVisiable ? 'Yes' : 'No'}</p>
        <p>User: {JSON.stringify(user)}</p>
        <p>Items: {JSON.stringify(items)}</p>
      </div>
    </>
  );
}