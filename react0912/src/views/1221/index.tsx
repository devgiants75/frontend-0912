import React from 'react'
import JSX01 from './a_JSX/JSX01'
import JSX02 from './a_JSX/JSX02'
import Props01 from './b_Props/Props01'
import Rendering01 from './c_Rendering/Rendering01'
import State01 from './d_State/State01'

export default function Index() {
  return (
    <div>
      <h1>1221 수업 자료</h1>
      <h2>1. JSX</h2>
      <JSX01 />
      <JSX02 />

      <h2>2. Props</h2>
      <Props01 />

      <h2>3. 조건부 렌더링</h2>
      <Rendering01 />

      <h2>4. 상태 관리</h2>
      <State01 />
    </div>
  )
}
