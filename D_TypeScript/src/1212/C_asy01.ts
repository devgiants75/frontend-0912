{
//! 외부 API 사용
// jsonplaceholder
// : 간단한 테스트 및 프로토 타이핑을 위해 사용되는 가짜 온라인 REST API
// : 사용자 데이터나 게시물 데이터를 요청하는 데 사용 가능

// https://jsonplaceholder.typicode.com/users

//! 비동기 처리 프로그래밍 - 콜백 함수

//? 1. 정의
// : 다른 함수에 인자로 넘겨지는 '함수'

//? 2. 사용방법
// : 비동기 작업을 수행하는 함수에 콜백 함수를 인자로 전달
// : 비동기 작업이 완료되면, 해당 콜백 함수가 호출

function fetchData(callback: (data: any) => void) {
  // 비동기 작업 수행
  // : 작업이 완료되면 결과를 콜백 함수의 인자로 전달하여 호출

  // fetch() 함수
  // - 네트워크 통신을 위해 제공되는 JS 내장 함수
  // - 주로 웹 API로부터 데이터를 가져오거나, 데이터를 서버에 전송할 때 사용
  /*
  fetch(url - 요청을 보낼 주소)
    .then(response => response.json()) // JSON형태로 응답을 처리
    .then(data => console.log(data)) // 데이터 처리 및 사용
    .catch(error => console.error(error)); // fetch에서 일어나는 오류 처리
  */

  // : HTTP 응답 객체를 반환(Promise)
  // : 후속 처리 메서드인 then을 사용하여 객체를 전달받음
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('오류 : ', error));
}

// fetchData함수의 인자로 전달되는 콜백 함수
function handleData(data: any) {
  console.log('받은 데이터: ', data);
}

fetchData(handleData);

//? 3. 콜백 지옥과 한계
// 콜백 지옥(Callback Hell)
// : 콜백 함수가 중첩되어서 코드의 가독성과 유지보수성이 떨어지는 상황
function fetchUserData(userId: number, callback: (data: any) => void) {
  // 첫 번째 요청: 사용자 데이터 가져오기
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      console.log('사용자 데이터: ', user);
      // 두 번째 요청: 해당 사용자 게시물 가져오기
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
          console.log('사용자의 게시물: ', posts);
          // 세 번째 요청: 사용자의 앨범 데이터를 가져오기
          fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(albums => {
              console.log('사용자의 앨범: ', albums);
              // 모든 데이터가 준비되었을 때 콜백 함수를 호출
              callback({ user, posts, albums })
            });
        });
    });
}

// 사용자 데이터 처리를 위한 콜백 함수
function handleUserData(data: any) {
  console.log('가져온 전체 데이터: ', data);
}

// 사용자 ID 1에 대한 데이터를 불러오기
fetchUserData(1, handleUserData);

//? 콜백 함수의 단점을 보완하는 기능
// - 프로미스: 비동기 코드를 체인 형태로 구성
// - Async/Await: 간결하고 동기코드와 유사한 형태로 비동기 코드를 작성
} // 닫히는 중괄호