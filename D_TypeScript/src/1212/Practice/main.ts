/*
! 외부 API를 활용한 비동기 작업 프로젝트
- jsonplaceholder의 photos 데이터를 사용
- https://jsonplaceholder.typicode.com/photos

- 각 페이지에 photos 데이터의 사진을 4개씩 첨부
- 사진의 이름(title)은 사진 아래 작성
- 페이지 간에 이동은 버튼(Previous, Next)으로 이동

- async/await를 사용하여 작성
*/

//! Photo 타입 정의
type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// 현재 페이지 번호를 추적하는 변수
let currentPage = 1;
// 페이지 당 사진 수
const photoPerPage = 4;

//! 비동기 함수로 사진을 불러오는 함수
async function fetchPhotos(page: number): Promise<Photo[]> {
  // API로 가져온 모든 사진을 불러오기
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`);
  const photos = await response.json() as Photo[];

  // 현재 페이지에 해당하는 사진들만 잘라내서 반환
  // slice 메소드
  // : 배열 메소드, 배열의 특정 부분을 새로운 배열로 반환

  // (page - 1) * photoPerPage
  // : 페이지 번호는 1부터 시작이지만, 인덱스 번호는 0부터 시작하기 때문에 -1을 한 번호에
  // , 페이지 당 사진 수를 곱하여, 현재 페이지의 첫 번째 사진이 배열에서 몇 번째 위치에 있는지 계산

  // page * photoPerPage
  // : 현재 페이지의 마지막 사진 다음의 인덱스를 계산
  return photos.slice((page - 1) * photoPerPage, page * photoPerPage);
  // page가 2이고, photosPerPage가 4인 경우
  // 시작 인덱스 (2 - 1) * 4 = 4
  // 끝 인덱스: 2 * 4 = 8
}

//! 사진을 페이지에 렌더링하는 함수
function renderPhotos(photos: Photo[]) {
  // 사진을 표시할 컨테이너 불러오기
  const container = document.getElementById('photo-container') as HTMLElement;
  // 컨테이너의 내용을 초기화
  container.innerHTML = '';

  // 각 사진에 대해 HTML 요소를 생성하고 컨테이너에 추가
  photos.forEach(photo => {
    const photoElem = document.createElement('div');
    photoElem.className = 'photo-item';
    photoElem.innerHTML = `<img src='${photo.thumbnailUrl}' alt='${photo.title}' /> <p>${photo.title}</p>`;
    container.appendChild(photoElem);
  })
}

//! '이전'버튼 클릭 이벤트 리스너 추가
//, !연산자의 경우: 해당 객체가 null이나 undefined가 아니라고 단언하는데 사용
document.getElementById('prev-button')!.addEventListener('click', () => {
  // 현재 페이지가 1보다 크면 이전 페이지로 이동
  if (currentPage > 1) {
    currentPage--;
    updatePhots();
  }
});

//! '다음' 버튼 클릭 이벤트 리스너 추가
document.getElementById('next-button')!.addEventListener('click', () => {
  // 다음 페이지로 이동
  currentPage++;
  updatePhots();
})

//! 사진을 업데이트하는 비동기 함수
async function updatePhots() {
  // 현재 페이지에 해당하는 사진들을 불러오기
  const photos = await fetchPhotos(currentPage);
  // 불러온 사진들을 화면에 렌더링
  renderPhotos(photos);
}

//! 초기 사진 로드
updatePhots();