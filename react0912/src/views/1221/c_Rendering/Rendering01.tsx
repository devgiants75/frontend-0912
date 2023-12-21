import React from 'react'
import { FaStar } from "react-icons/fa";

interface ItemType {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemType) {
  //! if 조건문을 사용한 조건부 렌더링
  // if (isPacked) {
  //   return <li className='item'>{name} ❤</li>;
    // 만약 조건부로 아무것도 반환하지 않을 경우
    // : null을 반환
    // return null;
  // }
  // return <li className='item'>{name}</li>;

  //! 삼항연산자를 사용한 조건부 렌더링
  return (
    <li className='item'>
      {isPacked ? (
        // del 태그: 텍스트를 가로지른 선
        <del>
          {name}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

//! 논리 연산자(&&)를 사용한 조건부 렌더링
// react-icons 사용
// npm install react-icons
export default function Rendering01() {
  const score = 10;

  return (
    <>
      <p>Packing List</p>
      <ul>
        <Item 
          name='Snack'
          isPacked={false}
        />
        <Item 
          name='Note'
          isPacked={false}
        />
        <Item 
          name='clothes'
          isPacked={true}
        />
      </ul>
      {/* 
        && 연산자 사용
        : 평점이 있을 경우에만 별점 표시
        : 앞의 항이 True인 경우에만 뒤의 항이 표시
      */}
      {score > 0 && <FaStar />}
    </>
  )
}
