import React from 'react'
import Component01 from './Component01'

export default function Component02() {
  return (
    <div>
      <p>강아지 컴포넌트 중복 사용</p>
      <Component01 />
      <Component01 />
    </div>
  )
}