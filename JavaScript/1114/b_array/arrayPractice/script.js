//! 사용자 목록을 보여주는 웹 페이지
// DOMContentLoaded: 문서의 초기 HTML이 완전히 로드되고 파싱되었을 때 실행하는 이벤트
document.addEventListener('DOMContentLoaded', function() {
  let users = [
    { name:'사용자 1', email: 'user1@example.com', age: 30 },
    { name:'사용자 2', email: 'user2@example.com', age: 20 }
    // 추가적인 사용자 데이터 첨부
  ];

  let userList = document.getElementById('user-list');

  users.forEach((user) => {
    let userDiv = document.createElement('div');
    userDiv.className = 'user';
    userDiv.innerHTML = `
      <h2>이름: ${user.name}</h2> 
      <p>이메일: ${user.email}</p>
      <p>나이: ${user.age}</p>`;
      // appendChild() 부모 요소의 자식 요소 리스트 중에서 제일 마지막 자식으로 붙임.
      userList.appendChild(userDiv);
  });
})

//! 최신 검색목록을 보여주는 검색창
document.addEventListener('DOMContentLoaded', function() {
  const searchBox = document.getElementById('search-box');
  const searchButton = document.getElementById('search-button');
  const searchList = document.getElementById('search-list');
  let recentSearches = [];

  searchButton.addEventListener('click', function() {
    const searchTerm = searchBox.value;
    // trim()
    // : 문자열의 양 끝의 공백을 제거한 원본 문자열
    // '  안녕하세요'.trim() >> '안녕하세요'
    if (searchTerm.trim() !== '') {
      // 새 검색어를 배열 앞쪽에 추가
      recentSearches.unshift(searchTerm);
      if (recentSearches.length > 5) {
        // 배열의 길이가 5를 초과하면 마지막 요소를 제거
        recentSearches.pop();
      }
      updateSearchList();
    }
  });

  function updateSearchList() {
    searchList.innerHTML = '';
    recentSearches.forEach((term) => {
      const listItem = document.createElement('li');
      listItem.textContent = term;
      searchList.appendChild(listItem);
    })
  }
})