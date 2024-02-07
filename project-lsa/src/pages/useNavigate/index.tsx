import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Index() {

  //! useNavigate 훅
  // : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동
  // : url 주소를 변경할 때 사용하는 hook
  // 파라미터가 숫자 타입이면 앞으로 가거나 뒤로 이동
  // -1 : 뒤로가기
  // -2 : 뒤로 2번 가기
  
  // 선택 옵션: {replace: true}
  // 페이지 이동 기록이 남지 않아
  // -> 뒤로가기를 눌러도 이전 페이지로 이동X, 정해진 페이지로만 이동

  let navigate = useNavigate();

  function handleHomeClick() {
    // navigate("/"); // 원하는 경로 지정
    navigate(-1);
  }

  function handleAboutClick() {
    navigate("/about", {replace: true});
    // navigate('/about/child1');
  }

  return (
    <>
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={handleAboutClick}>About</button>
    </>
  )
}
