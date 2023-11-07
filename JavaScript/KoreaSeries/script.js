// '결과 예측하기' 버튼에 클릭 이벤트 리스너를 추가
// HTML 문서에서 id가 'predict-button'요소를 선택
document.getElementById('predict-button').addEventListener('click', function() {
  // results 객체
  // : LG와 KT 각각의 승리 횟수를 추적
  let results = { 'LG': 0, 'KT': 0 };
  // 최대 게임 횟수를 저장하는 변수
  // 7전 4선승제 >> 최대 7경기
  let maxGames = 7;
  // 지금까지 진행된 게임 수를 저장하는 변수
  let gamesPlayed = 0;
  // 경기 결과를 담을 배열 (각 경기마다 누가 이겼는지 기록)
  let gameOutcomes = [];

  // 시리즈가 끝날 때까지 게임을 진행
  // (한 팀이 4승을 하거나, 최대 게임 수에 도달할 때까지)
  while (gamesPlayed < maxGames && results['LG'] < 4 && results['KT'] < 4) {
    // Math.random() 함수
    // : 0과 1사이의 난수를 생성하고, 난수를 기반으로 승자를 결정
    // 0.5 미만일 경우 LG 승리, 그렇지 않으면 KT의 승리로 처리
    let winner = Math.random() < 0.5 ? 'LG' : 'KT';
    // 결정된 승자의 승리 횟수를 1 증가
    results[winner]++;
    // 진행된 게임의 수를 1 증가
    gamesPlayed++;

    // 경기 결과를 배열에 추가 
    gameOutcomes.push(`${gamesPlayed}차전 ${winner} 승리`);
  }

  // 모든 게임이 종료된 경우 최종 결과를 화면에 표시하는 함수를 호출
  displayResults(results, gameOutcomes);
});

// displayResults 함수는 최종 결과를 받아서 웹페이지에 표시
function displayResults(results, gameOutcomes) {
  // 현재 시리즈의 결과를 문자열로 작성
  let resultText = `현재 시리즈 결과: LG ${results['LG']} : KT ${results['KT']}`;

  gameOutcomes.forEach(function(outcome) {
    resultText += `<br /> ${outcome} <br /> `;
  })

  // LG 또는 KT가 4승을 달성했다면 시리즈 승리 메시지를 결과 문자열에 추가
  if (results['LG'] == 4 || results['KT'] == 4) {
    // 승리한 팀에 따라 다른 메시지가 출력
    resultText += `<br /> 
    <strong>
      ${results['LG'] == 4 ? 'LG Twins' : 'KT Wiz'}가 시리즈에서 승리했습니다.
    </strong>`;
  }
  // HTML 문서 내에 결과를 표시할 요소를 찾아서 내부 HTML을 결과 문자열로 설정
  document.getElementById('prediction-result').innerHTML = resultText;
}