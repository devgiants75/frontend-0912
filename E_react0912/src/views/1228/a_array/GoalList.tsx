import React from 'react'

interface Goal {
  id: number;
  title: string;
  explanation: string;
}

interface GoalProps {
  goals: Goal[]
  // 삭제 버튼 클릭 시 onRemove 함수로 해당 버튼이 있는 배열의 id가 전달
  onRemove: (id: number) => void;
}

export default function GoalList({ goals, onRemove }: GoalProps ) {
  return (
    <>
      {/* title - explanation */}
      {goals.map((goal) => (
        <div>
          <span key={goal.id}>
            {goal.title} - {goal.explanation}
          </span>
          <button onClick={() => onRemove(goal.id)}>삭제</button>
        </div>
      ))}
    </>
  );
}
