import React from 'react'
import GoalApp from './a_array/GoalApp'
import UseEffect01 from './b_effect/UseEffect01'
import UseEffect02 from './b_effect/UseEffect02'

export default function Index() {
  return (
    <>
      <h1>1228 리액트 수업 자료</h1>

      <h2 style={{backgroundColor: 'pink'}}>배열 추가/제거/수정</h2>
      <GoalApp />

      <h2 style={{backgroundColor: 'pink'}}>컴포넌트의 부수효과 수행</h2>
      <UseEffect01 />
      <UseEffect02 />
    </>
  )
}
