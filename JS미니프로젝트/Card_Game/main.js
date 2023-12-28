document.addEventListener("DOMContentLoaded", () => {
  //! HTML 요소를 선택
  const cardContainer = document.getElementById("card-container");
  const startButton = document.getElementById("start-button");
  const resetButton = document.getElementById("reset-button");
  const completedButton = document.getElementById("completed-button");

  //! 색상 배열을 정의
  // ["black", "red", "yellow", "pink", "orange", "blue"];
  const colors = ["#cc3131", "#e2ddbb", "#23b923", "#34bcbc", "#3939db", "#e5b7e4"];

  //! colors 배열의 색상들을 복제하여 새로운 배열 cardColors를 생성
  // : ...연산자를 사용하여 모든 요소를 새 배열에 두 배 포함되도록 복사
  let cardColors = [...colors, ...colors];

  //! 게임을 초기화하는 함수 정의
  function initializeGame() {
    //? cardColors 배열을 섞기
    shuffle(cardColors);

    //? cardContainer의 내부 HTML을 비움.
    // : 게임 새로 시작 시 기존의 카드를 제거
    cardContainer.innerHTML = "";

    //? 12개의 카드를 생성하는 for 반복문
    for (let i = 0; i < 12; i++) {
      // cardContainer의 내부 HTML 추가
      // : 12개의 새로운 카드 요소 생성
      cardContainer.innerHTML += `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="./images/puppy-gb43ed7c88_1280.jpg" alt="카드의 앞면" />
            </div>
            <div class="card-back" style="background-color: ${cardColors[i]}"></div>
          </div>
        </div>
      `;
    }

    // 카드에 이벤트 리스너를 추가하는 함수 호출
    // : 카드를 클릭했을 때 동작을 정의
    addCardEventListeners();
  }

  //! 잠시동안 모든 카드를 공개하는 함수를 정의
  function revealCardsTemporarily() {
    // 'completed-button' 버튼을 비활성화
    // : 카드가 공개되어 있는 동안 클릭 X
    completedButton.disabled = true;

    // 100밀리초(0.1) 후에 모든 카드를 뒤집는 동작을 수행
    setTimeout(() => {
      // 페이지 내의 모든 .card 클래스를 가진 요소 뒤집기
      document.querySelectorAll('.card').forEach(card => {
        card.classList.add('flipped');
      })
    }, 100);

    // 2000밀리초(2) 후에 모든 카드를 다시뒤집어 원래 상태로 돌림
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('flipped');
      });
      // 'completed-button' 버튼을 다시 활성화
      completedButton.disabled = false;
    }, 2000);
  }

  //! 모든 카드 요소에 클릭 이벤트 리스너를 추가하는 함수
  function addCardEventListeners() {
    // card 클래스를 가진 모든 요소를 찾아서 변수에 할당
    const cards = document.querySelectorAll('.card');
    // cards 배열의 각 카드에 대해 반복문을 실행
    cards.forEach((card) => {
      // 각 카드에 클릭 이벤트 리스너를 추가
      // 클릭 시 flipCard 함수가 호출
      card.addEventListener('click', flipCard);
    });
  }

  // 카드가 뒤집혔는지 여부, 첫 번째와 두 번째 선택된 카드, 게임판이 잠겨있는지 여부를 나타내는 변수
  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard = false;

  //! 카드를 뒤집는 함수 정의
  function flipCard() {
    // 게임판이 잠겨 있으면 더 이상 카드를 뒤집지 X
    if (lockBoard) return;
    // 클릭한 카드를 뒤집기
    this.classList.add('flipped');

    if (!hasFlippedCard) {
      // 첫 번째 카드를 뒤집은 경우
      hasFlippedCard = true;
      // 첫 번째 카드로 설정
      // this는 현재 클릭한 카드 요소를 가리킴
      firstCard = this; 
    } else {
      // 두 번재 카드를 뒤집은 경우
      // 다음 선택을 위해 'hasFlippedCard'를 false 설정
      hasFlippedCard = false;
      secondCard = this;
    }

    // 두 카드가 일치하는지 확인
    checkForMatch();
  }

  //! 두 카드가 일치하는지 확인하는 함수 정의
  function checkForMatch() {
    // 두 카드의 배경색이 같으면 매치된 것으로 처리
    let isMatch = firstCard.querySelector('.card-back').style.backgroundColor === secondCard.querySelector('.card-back').style.backgroundColor;

    // 카드가 매치되면 카드를 비활성화
    // , 아니면 다시 뒤집기
    isMatch ? disableCards() : unflipCards();
  }

  //! 매치된 카드를 처리하는 함수 정의
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    // 게임판을 초기화
    resetBoard();
  }

  //! 매치되지 않은 카드를 다시 뒤집는 함수 정의
  function unflipCards() {
    // 게임판을 잠금
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');

      // 카드를 뒤집은 후 게임판 잠금을 해제
      resetBoard();
    }, 1000);
  }

  //! 게임판을 초기화하는 함수 정의
  function resetBoard() {
    // 뒤집혀진 카드도 없고, 게임판 잠금을 해제
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  //! 게임 시작 시간을 기록할 변수 선언
  let gameStartTime;

  //! 'start-button' 버튼에 클릭 이벤트 리스너 추가
  startButton.addEventListener('click', () => {
    // 게임을 초기화하는 함수 호출
    initializeGame();
    // 현재 시간을 게임 시작 시간으로 설정
    gameStartTime = new Date();
    // 버튼의 가시성을 조정하는 함수 호출
    toggleButtonVisibility(true);
    // 카드를 잠시동안 공개하는 함수 호출
    revealCardsTemporarily();
  });

  //! 'reset-button' 버튼에 클릭 이벤트 리스너 추가
  resetButton.addEventListener('click', () => {
    // 게임을 초기화하는 함수 호출
    initializeGame();
    // 현재 시간을 게임 시작 시간으로 설정
    gameStartTime = new Date();
    // 버튼의 가시성을 조정하는 함수 호출
    toggleButtonVisibility(true);
    // 카드를 잠시동안 공개하는 함수 호출
    revealCardsTemporarily();
  });

  // 'completed-button' 버튼 클릭 이벤트 리스너 추가
  completedButton.addEventListener('click', () => {
    // 모든 카드가 뒤집혀있는지 확인
    // : .card 클래스를 가진 모든 요소를 배열로 변환하고, every 함수를 사용해 모든 카드가 'flipped' 클래스를 포함하고 있는지 확인

    // Array.from()는 NodeList를 배열로 변환
    // every함수는 배열의 모든 요소가 주어진 함수를 만족할 때 true를 반환
    const allFlipped = Array.from(document.querySelectorAll('.card')).every(card => card.classList.contains('flipped'));

    // 모든 카드가 뒤집혔는지 확인 후 조건에 따라 다른 행동을 작성
    if (allFlipped) {
      // 모든 카드가 뒤집혔다면
      // 현재 시간이서 게임 시작 시간을 뺀다.
      const gameTime = new Date() - gameStartTime;
      alert(`게임 완료! 소요 시간: ${Math.floor(gameTime / 1000)}초`);
    } else {
      // 모든 카드가 뒤집히지 않았을 경우
      alert('완료되지 않았습니다.');
    }
  });

  // 버튼의 가시성을 토글하는 함수 정의
  function toggleButtonVisibility(isGameStarted) {
    // 게임 시작 > 시작 버튼 숨김 : 아니면 표시
    startButton.style.display = isGameStarted ? 'none' : 'block';
    // 게임 시작 > 리셋 버튼 표시 : 아니면 숨김
    resetButton.style.display = isGameStarted ? 'block' : 'none';
    // 게임 시작 > 완료 버튼 표시 : 아니면 숨김
    completedButton.style.display = isGameStarted ? 'block' : 'none';
  }

  // 초기에는 시작 버튼만 표시
  toggleButtonVisibility(false);

  // 게임을 초기화 (화면에 렌더링)
  initializeGame();
})

// 배열의 요소를 무작위로 섞는 커스텀 함수
function shuffle(array) {
  // 배열의 마지막 요소부터 시작하여 첫 번째 요소까지 역순으로 반복
  for (let i = array.length - 1; i > 0; i--) {
    // 0부터 i까지의 무작위 인덱스를 생성
    // : Math.floor(Math.random() * (i + 1))
    // 현재 요소(i)와 무작위로 선택된 요소(j)의 위치를 교환

    // 0과 1 사이의 무작위 수를 생성하여
    // 이를 i + 1로 곱하여 0부터 i까지의 범위 내에서 무작위 j를 생성
    let j = Math.floor(Math.random() * (i + 1));
    // 배열의 i번째 원소와 j번째 요소를 서로 바꿈
    // : 구조분해 할당으로 표현
    // : '피셔-에이츠 셔플'의 알고리즘 기반
    [array[i], array[j]] = [array[j], array[i]]
  }
}