import React, { ChangeEvent } from 'react'

// input 두 개와 button 하나로 이루어진 컴포넌트
// : 2024년의 목표와 설명을 첨부
// : '목표 추가'버튼을 클릭하면 목표가 추가

interface GoalProps {
  goal: {
    title: string;
    explanation: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCreate: () => void;
}

export default function CreateGoal({ goal, onChange, onCreate }: GoalProps) {
  return (
    <div>
      <input 
        type="text" 
        name='title'
        placeholder='목표를 입력하세요.'
        onChange={onChange}
        value={goal.title}
      />
      <input 
        type="text" 
        name='explanation'
        placeholder='설명을 입력하세요.'
        onChange={onChange}
        value={goal.explanation}
      />
      <button onClick={onCreate}>목표 추가</button>
    </div>
  )
}
