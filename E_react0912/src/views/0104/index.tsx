import React, { useContext } from 'react'
import UseReducer01 from './a_useReducer/UseReducer01'
import UseReducer02 from './a_useReducer/UseReducer02'
import CustomHook01 from './b_customHook/CustomHook01'
import Framework from './c_style_framework/Framework'

import { useBackgroundColor } from '../0105/a_ContextAPI/ThemeContext'

export default function Index() {

  const { theme } = useBackgroundColor();

  return (
    <div style={{ backgroundColor: theme }}>
      <h1>20240104 수업 자료</h1>
      <h2>useReducer</h2>
      <UseReducer01 />
      <UseReducer02 />
      
      <h2>Custom Hook</h2>
      <CustomHook01 />

      <h2>리액트 CSS 프레임워크</h2>
      <Framework />
    </div>
  )
}
