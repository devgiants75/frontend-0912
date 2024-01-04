import { useState } from "react";

//! useInput 훅 정의
// : 입력 필드의 현재 값과 
// : 해당 값을 업데이트하는 함수를 반환 

export function useInput(initialValue: string) {
  // input 태그에서 작성되는 text 상태 관리
  const [value, setValue] = useState(initialValue);

  // 입력 값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleInputChange,
  };
}