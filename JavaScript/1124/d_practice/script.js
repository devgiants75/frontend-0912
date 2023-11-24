// 웹 문서에 이벤트 리스너 추가
// 전체 웹 문서가 로드 된 이후에 실행할 기능을 작성

// 현재값(input 필드에 입력되는 값)
// 변환상수 (기본값 10)

// DOM요소 가져오기
// select
// input
// span

// 계산 함수 구현(calculate)
// span요소에 텍스트 추가로 현재 값과 변환 상수를 곱하여 첨부 
// 숫자를 문자열로 변환
// (소수점 2번째 자리까지만 출력)

// select에 이벤트 리스너 추가
// select가 변경(change)될 경우 
// 해당 이벤트를 매개변수로 전달하여
// const options = event.currentTarget.options;
// const index = event.currentTarget.options.selectedIndex;
// 변환상수 Number(options[index].value);
// calculate();

// input에 이벤트 리스너 추가
// 키보드 이벤트 추가(keyup)
// 현재값 = Number();
// calculate();