//! 버블 정렬 구현
// : 주어진 정수 배열을 버블 정렬 알고리즘을 사용하여
// : , 오름차순 정렬하는 함수를 구현

//? 문제
// 주어진 정수 배열 arr을 버블 정렬 알고리즘을 사용하여 오름차순 정렬하는 함수 bubbleSort를 작성
// - 조건
// : 배열의 각 요소는 정수
// : 배열의 길이는 최소 1이상

// >> 배열의 각 요소를 순차적으로 비교해서 필요에 따라 위치를 바꾸는 방식으로 작동

// 각 단계에서 인접한 두 개의 원소를 비교, 필요시 위치 변경
// 한 번의 단계가 수행되면 가장 큰 원소가 맨 뒤로 이동
// 그 다음 단계에서 맨 뒤로 이동한 데이터는 정렬에서 제외

function bubbleSort(arr) {
  let n = arr.length; // 배열의 길이를 n에 저장
  for (let i = 0; i < n - 1; i++) { // 배열을 n-1번 반복
    // 각 반복마다 배열의 끝에서 이미 정렬된 부분을 제외하고 비교
    for (let j = 0; j < n - i - 1; j++) {
      // 현재 요소가 다음 요소보다 크면,
      if (arr[j] > arr[j + 1]) {
        // 요소의 위치를 변경
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // 정렬된 배열을 반환
}

let arr = [34, 21, 3, 45, 12];
let sortArr = bubbleSort(arr);
console.log(sortArr);

//! 선형 탐색 구현
// : 주어진 정수 배열에서 특정 값을 찾는 선형 탐색 알고리즘을 구현
// : 찾고자 하는 값이 배열에 존재하면 해당 인덱스를 반환, 존재하지 않으면 -1을 반환

//? 문제
// 정수 배열 arr와 정수 target이 주어질 때
// , 배열 내에서 target을 찾는 선형 탐색 함수 linearSearch 작성

// - 조건
// : 배열의 각 요소는 정수
// : 배열은 정렬되지 않은 상태일 수 있음

function linearSearch(arr, target) {
  // 배열의 첫 요소부터 마지막 요소까지 순회
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    // 현재 요소가 타겟과 일치하면
    if (arr[i] === target) {
      // 현재 요소의 인덱스를 반환
      return i;
    }
  }
  return -1;
}

let arr2 = [5, 3, 10, 2, 9];
let target = 10;
let linearArr = linearSearch(arr2, target);
console.log(linearArr);

//! 선택 정렬 구현
// : 배열을 순회하며 가장 큰(또는 가장 작은) 요소를 찾아 해당 요소를 배열의 올바른 위치로 이동시키는 방식으로 동작

//? 주어진 정수 배열 arr3를 선택 정렬 알고리즘으로 내림차순하는 함수 selectionSort
// - 조건
// : 배열의 각 요소는 정수
// : 배열의 길이는 최소 1 이상

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // 현재 최대 값의 인덱스를 저장
    let maxIndex = i;
    // 나머지 요소를 탐색하여 최대값보다 큰 값을 검색
    for (let j = i + 1; j < n; j ++) {
      // 현재 요소가 현재 최대 값보다 크면
      if (arr[j] > arr[maxIndex]) {
        // 최대 값의 인덱스를 업데이트
        maxIndex = j;
      }
    }
    // 최대 값과 현재 위치의 요소를 교환
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }
  return arr;
}

const inputArray = [22, 11, 99, 88, 9, 7, 42];
const sortedArray = selectionSort(inputArray);
console.log(sortedArray);

//! 삽입 정렬과 이진 탐색 조합 구현
// 삽입 정렬
// : 각 순회에서 현재 요소를 이미 정렬된 배열 부분에 삽입

// 이진 탐색
// : 정렬된 데이터 집합을 이분화하여 탐색

//? 주어진 정수 배열 arr를 삽입 정렬 알고리즘을 사용하여 정렬하는 insertionSortBinarySearch 작성

// - 조건
// : 배열의 각 요소는 정수
// : 배열의 길이는 최소 1 이상

// 이진 탐색 함수 작성
// arr: 정렬된 배열
// item: 삽입할 데이터
// start: 검색을 시작할 인덱스 번호
// end: 검색을 끝낼 인덱스 번호
function binarySearch(arr, item, start, end) {
  // 기본 조건 start가 end가 큼
  // : 탐색 범위가 한 개로 축소 되었을 때의 상황을 처리
  if (start >= end) {
    // item이 arr[start]보다 크면 start + 1 그렇지 않으면 그대로의 값을 반환
    return (item > arr[start]) ? start + 1 : start;
  }

  // 현재 탐색 범위의 중간점을 계산
  let mid = Math.floor((start + end) / 2);

  // 중간값과 같다면 중간값 바로 뒤에 삽입
  if (item === arr[mid]) {
    return mid + 1;
  }

  if (item > arr[mid]) {
    return binarySearch(arr, item, mid + 1, end);
  }

  return binarySearch(arr, item, start, mid);
}

function insertionSortBinarySearch(arr) {
  let n = arr.length;
  // i = 0 (배열의 첫 번째 요소)는 이미 정렬된 것으로 간주
  for (let i = 1; i < n; i++) {
    // 현재 정렬할 요소를 저장
    let key = arr[i];
    // key보다 앞에 있는 배열 요소들을 순회하는 데 사용
    let j = i - 1;

    // 이진 탐색을 사용하여 삽입할 위치를 탐색
    let index = binarySearch(arr, key, 0, j);

    // while
    // : 삽입할 위치가 현재 위치보다 앞이라면, 요소들을 뒤로 이동
    // : key보다 앞에 있는 요소들을 오른쪽으로 한 칸씩 이동, key를 삽입할 위치를 만드는 작업
    while(j >= index) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key
  }
  return arr;
}

const inputArr = [37, 33, 0, 17, 12, 72, 31];
const sortedArr = insertionSortBinarySearch(inputArr);
console.log(sortedArr);