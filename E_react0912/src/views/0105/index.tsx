import React from 'react'
import ContextApi01 from './a_ContextAPI/ContextApi01'
import ThemeProvider from './a_ContextAPI/ThemeProvider'

export default function index() {
  return (
    <>
      <h1>0105 리액트 수업 자료</h1>
      <h2>Context API</h2>
      <ThemeProvider>
        <ContextApi01 />
      </ThemeProvider>
    </>
  )
}
