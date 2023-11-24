// 이메일 형식을 확인하는 기능
// input 필드에 사용자가 이메일 입력 시

// 입력 필드가 실시간으로 이벤트를 처리(keyup)
// : 입력내용이 변경

// input 필드에 입력된 내용을 정규 표현식을 사용하여 표현법을 맞춤.
const isEmail = (value) => {
  // : 골뱅이를 포함하고 있고 골뱅이 뒤에 마침표(온점)가 있다면 이메일로 확인
  // devgianst75@naver.com

  // String.prototype.indexOf()
  // : 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환
  // : 일치하는 값이 없으면 -1 반환

  // String.prototype.split()
  // : String객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
  return (value.indexOf('@') > 1)
    && (value.split('@')[1].indexOf('.') > 1);
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const p = document.querySelector('p');
  
  // 글자 입력 양식의 change 이벤트
  input.addEventListener('keyup', (event) => {
    const value = event.currentTarget.value;
    if (isEmail(value)) {
      p.style.color = 'green';
      p.textContent = `이메일 형식입니다: ${value}`;
    } else {
      p.style.color = 'red';
      p.textContent = `이메일 형식이 아닙니다: ${value}`;
    }
  })
})
