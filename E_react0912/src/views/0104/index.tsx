import React from 'react'
import UseReducer01 from './a_useReducer/UseReducer01'
import UseReducer02 from './a_useReducer/UseReducer02'
import CustomHook01 from './b_customHook/CustomHook01'

export default function Index() {
  return (
    <>
      <h1>20240104 수업 자료</h1>
      <h2>useReducer</h2>
      <UseReducer01 />
      <UseReducer02 />
      
      <h2>Custom Hook</h2>
      <CustomHook01 />
    </>
  )
}
