import React, { useState } from 'react';

import axios from 'axios';

//! Axios
// : HTTP 클라이언트 라이브러리(Fetch API, JQuery 등)
// : 브라우저와 서버 환경 모두에서 HTTP 요청을 보내 데이터를 받아오는 기능

//? 장점
// - 간결한 API: 코드 작성이 쉬움
// - 프로미스 기반: 비동기 처리 가능
// - 자동 JSON 변환이 가능

//? axios 사용 방법
// 1. 설치
// npm install axios

export default function Axios01() {
  const [data, setData] = useState();

  // 2. axios를 사용하여 서버로 요청 보내기
  // GET / POST / PUT / DELETE

  // then: 비동기 작업이 완료되면 해당 url로 부터 가져온 값을 받는 메소드
  // catch: 비동기 작업 또는 then에서 발생하는 에러를 받는 메소드

  // get(경로): 데이터를 서버로 부터 가져올 때 사용
  axios.get('https://example.com/users')
    .then(response => {
      console.log(response.data);
      let data = response.data;
      setData(data);
    })
    .catch(error => {
      console.log(error);
      console.error(error);
    }
  );

  // post(경로, 데이터): 서버에 데이터를 생성할 때 사용
  axios.post('https://example.com/users', { name: 'New Items' })

  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  
  // put(경로, 데이터): 서버에 데이터를 업데이트(수정)할 때 사용
  // axios.put('https://example.com/users/1', { name: 'Updated Items' })

  // delete(경로): 서버의 데이터를 삭제할 때 사용
  // axios.delete('https://example.com/users/1')

  //? 경로
  // : RESTful API 규칙

  // 1. 자원 기반의 URL 작성
  // 데이터(베이스)를 명시 - 경로에 정확한 데이터명을 사용하여 호출
  // ex) 사용자 목록: users, 제품 목록: products

  // 2. 자원에 따른 행동이 get, post, put, delete 중 명확한 행동을 호출

  // 3. 불러온 데이터의 유실을 최소화

  // HTTP 상태코드
  // 200 OK: 성공적인 요청과 응답
  // 400: 클라이언트의 잘못된 요청
  // 404: 요청한 자원을 찾을 수 없는 경우
  // 500: 서버 내부 오류

  // npm run mock-server

  // json-server 설치 확인
  // json-server --version

  return (
    <div></div>
  )
}
