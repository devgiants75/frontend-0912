{
//! 프로미스(Promise)
// : 비동기 연산의 최종 완료(또는 실패) 및 그 결과값을 나타냄

// : 비동기 작업의 결과를 나타내는 객체
// : 작업의 성공 또는 실패를 처리하고, 결과를 받는 일을 처리하는 객체

//? 프로미스 사용방법
// 1. Promise 생성자
// : Promise 생성자를 사용하여 Promise 객체를 생성
// : 비동기 작업을 수행하는 함수를 인자로 전달받는다.
// : 성공(resolve) 상태 또는 실패(reject) 상태를 가짐

const fetchData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

fetchData()
  .then(data => console.log('데이터: ', data))
  .catch(error => console.error('오류: ', error));

fetchData()
  .then(data => {
    console.log('첫 번째 데이터: ', data);
    return fetchData(); // 다른 데이터 요청
  })
  // 프로미스 체이닝
  // : 프로미스를 순차적으로 연결해서, 한 작업의 결과가 다음 작업의 입력으로 사용되는 경우
  .then(anotherData => console.log('두 번째 데이터: ', anotherData))
  .catch(error => console.error('오류: ', error));

} // 닫히는 중괄호