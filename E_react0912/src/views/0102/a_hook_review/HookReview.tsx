import React, { useEffect, useState } from 'react'

// 사진 객체 정의를 위한 인터페이스
interface Photo {
  id: number;
  title: string;
}

export default function HookReview() {
  // 사진 목록을 저장하는 상태
  const [photos, setPhotos] = useState<Photo[]>([]);

  // 사용자의 검색어를 저장하는 상태
  const [searchTerm, setSearchTerm] = useState<string>('');

  // 현재 수정 중인 사진의 제목을 저장하는 상태
  const [editTitle, setEditTitle] = useState<string>('');

  // 현재 수정 중인 사진의 ID를 저장하는 상태
  // : 초기값은 null
  const [editingId, setEditingId] = useState<number | null>(null);

  // 컴포넌트가 마운트 될 때 외부 API에서 데이터를 불러오기
  useEffect(() => {
    // API 호출
    // fetch로 가져오는 응답을 JSON형태로 변환
    // 처음 30개의 사진만 가져와서 상태에 저장
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => setPhotos(data.slice(0, 15)));
  }, []); // 빈 의존성 배열: 마운트 시에만 실행

  // 특정 사진을 삭제하는 함수
  const deletePhoto = (id: number): void => {
    // 해당 ID를 제외한 사진들로 목록 갱신
    setPhotos(photos.filter(photo => photo.id !== id));
  }
  
  // 특정 사진의 수정을 시작하는 함수
  const startEdit = (photo: Photo) => {
    // 수정 중인 사진의 ID 설정
    setEditingId(photo.id);
    
    // 수정 중인 사진 제목을 입력 필드에 설정
    setEditTitle(photo.title);
  }

  // 사진 수정을 완료하는 함수
  const editPhoto = () => {

  }


  // 검색어에 따라 필터링된 사진 목록 생성
  // includes()메서드
  // : 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 true | false의 값을 반환
  const filteredPhotos = photos.filter(photo => photo.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {/* 새 사진 추가 입력 필드 */}

      {/* 사진 추가 버튼 */}

      {/* 
        수정 중인 사진을 위한 입력 필드 및 저장 버튼 
      */}
      {editingId !== null && (
        <div>
          
        </div>
      )}

      {/* 사진 목록을 리스트로 표시 */}
      <ul>
        {filteredPhotos.map(photo => (
          <li key={photo.id}>
            {photo.title}
            {/* 수정 버튼 */}
            <button onClick={() => startEdit(photo)}>Edit</button>
            {/* 삭제 버튼 */}
            <button onClick={() => deletePhoto(photo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
