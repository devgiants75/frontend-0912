import React, { ChangeEvent, useRef, useState } from 'react'
import CreateGoal from './CreateGoal'

interface Goal {
  id: number;
  title: string;
  explanation: string;
}

// 초기 목표
const initialGoals = [
  {
    id: 1,
    title: '책 10권 읽기',
    explanation: '경제 서적 10권 읽기'
  },
  {
    id: 2,
    title: '책 11권 읽기',
    explanation: '경제 서적 11권 읽기'
  },
  {
    id: 3,
    title: '책 12권 읽기',
    explanation: '경제 서적 12권 읽기'
  },
]

export default function GoalApp() {
  // 목표 상태 관리
  const [goal, setGoal] = useState<Goal>({
    id: 1,
    title: '',
    explanation: ''
  })
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  const nextId = useRef(4);

  // 목표 입력 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGoal({
      ...goal,
      [name]: value
    });
  }

  // 목표 추가 핸들러
  const handleAddGoal = () => {
    // 현재 목표를 목표 목록에 추가

    // 입력 필드 초기화
  }
  
  return (
    <div>
      <CreateGoal
        goal={goal}
        onChange={handleChange}
        onCreate={handleAddGoal}
      />
    </div>
  )
}
