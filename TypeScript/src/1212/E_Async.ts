{
//! Async와 Await
// : 프로미스를 기반으로 비동기 작업을 보다 간편하게 작성하는 방법
// async함수 내에서 await 키워드를 사용하여 비동기 작업의 결과를 기다림

//? 사용방법
// async 함수 내부에서만 await를 사용 할 수 있다.
// : await는 프로미스 결과를 기다리는데 사용
// : 동기코드와 유사한 형태로 비동기 코드를 작성

// 함수가 비동기적으로 동작함을 나타냄.
async function fetchUserData() {
  // 정상적으로 실행되는 코드 블럭
  // try...catch 블록을 사용하여 await 표현식에서 발생할 수 있는 예외를 캡쳐
  try {
    // 비동기적인 작업의 결과를 기다림.
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    const data = await response.json();
    console.log('사용자 데이터: ', data);
  } catch (error) {
    console.error('데이터 요청 중 오류: ', error);
  }
}

fetchUserData();

// 비동기 코드의 타입 안전성
interface UserData {
  id: number;
  name: string;
  [key: string]: any;
}

async function fetchData(): Promise<UserData> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if(!response.ok) {
    throw new Error('데이터 요청 실패');
  }
  return await response.json() as UserData;
}

fetchData()
  .then(data => console.log('사용자 데이터:', data))
  .catch(error => console.error('오류:', error));

} // 닫히는 중괄호