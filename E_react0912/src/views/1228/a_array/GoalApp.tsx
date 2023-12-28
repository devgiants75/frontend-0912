import React, { ChangeEvent, useRef, useState } from 'react'
import CreateGoal from './CreateGoal'
import GoalList from './GoalList';

//! 배열에 항목을 추가
// spread연산자, concat 함수를 사용

//! 배열에 항목을 제거

// 목표 타입 정의
interface Goal {
  id: number;
  title: string;
  explanation: string;
}

// 초기 목표
const initialGoals: Goal[] = [
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

// 목표 APP 컴포넌트 정의
export default function GoalApp() {
  // 목표 상태 관리
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  // 목표 입력 상태 관리
  const [goalInput, setGoalInput] = useState({
    title: '',
    explanation: ''
  })

  // 목표 ID 관리
  const nextId = useRef(4);

  // 목표 입력 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 두 개의 input 창의 값을 하나의 핸들러로 관리하기 때문에 이벤트가 일어나는 target에서 데이터 값을 비구조화 할당으로 처리
    const { name, value } = e.target;

    // 스프레드 연산자를 사용하여 
    // 변경되지 않은 input은 그래도 두고
    // 변경된 name의 value값만 업데이트
    setGoalInput({
      ...goalInput,
      [name]: value
    });
  };

  // 목표 추가 핸들러
  const handleCreate = () => {
    // 새로운 목표 생성
    const newGoal = {
      id: nextId.current,
      title: goalInput.title,
      explanation: goalInput.explanation
    };
    // 현재 목표를 목표 목록에 추가
    // : 기존의 배열을 수정하지 않고 복사하여 사용
    // : 불변성
    // >> spread 연산자 (...)
    // >> concat 함수
    //    : 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 생성
    //? setGoals([...goals, newGoal]);    
    setGoals(goals.concat(newGoal));

    // 입력 필드 초기화
    setGoalInput({title: '', explanation: ''});
    // 다음 ID 증가
    nextId.current += 1;
  }

  const handleRemove = (id: number) => {
    // user.id가 매개변수로 일치하지 않는 원소만 '추출'해서 새로운 배열을 만듬
    // : user.id가 매개변수로 받아오는 id 인것을 제거
    setGoals(goals)
  }
  
  return (
    <div>
      <CreateGoal
        goal={goalInput}
        onChange={handleChange}
        onCreate={handleCreate}
      />

      <h3>2024년 목표 목록</h3>
      <GoalList goals={goals} onRemove={handleRemove}/>
    </div>
  )
}