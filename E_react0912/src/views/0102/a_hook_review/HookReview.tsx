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

  // 새로운 사진 제목을 저장하는 상태
  const [newPhotoTitle, setNewPhotoTitle] = useState<string>('');

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

  // 새 사진을 추가하는 함수
  const addPhoto = () => { 
    // 새로운 사진 객체를 생성
    const newPhoto: Photo = {
      // Math.max 함수: 해당 목록에 제일 큰 숫자를 불러옴
      // map 함수를 사용하여 photos 배열의 각 사진에서 ID만 추출
      // , photos 배열이 비어있을 경우 기본값으로 0을 사용
      id: Math.max(...photos.map(photo => photo.id), 0) + 1,

      // 입력 필드에서 사용자가 입력한 새 사진 제목을 사용
      title: newPhotoTitle,
    };

    // 사진 목록 상태를 갱신
    setPhotos([...photos, newPhoto]);

    // 입력 필드 초기화
    setNewPhotoTitle('');
  }


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
    // 사진 수정 완료 시 렌더링 된 사진 배열의 요소를 변경
    setPhotos(
      photos.map(photo => 
        // ID가 일치하면 제목을 수정
        photo.id === editingId ? { ...photo, title: editTitle } : photo
      )
    );
    
    setEditTitle(''); // 입력 필드 초기화
    setEditingId(null); // 수정 중인 사진 ID 초기화
  }

  // 검색어에 따라 필터링된 사진 목록 생성
  // includes()메서드
  // : 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 true | false의 값을 반환
  const filteredPhotos = photos.filter(photo => photo.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {/* 검색 입력 필드 */}
      <input 
        type="text"
        placeholder='Search photos'
        value={searchTerm}  
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <hr />
      {/* 새 사진 추가 입력 필드 */}
      <input 
        type="text"
        placeholder='Add new photo title'  
        value={newPhotoTitle}
        onChange={(e) => setNewPhotoTitle(e.target.value)}
      />

      {/* 사진 추가 버튼 */}
      <button onClick={addPhoto}>Add Photo</button>

      <hr />

      {/* 
        수정 중인 사진을 위한 입력 필드 및 저장 버튼 
      */}
      {editingId !== null && (
        <div>
          <input 
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button onClick={editPhoto}>Save Edit</button>
        </div>
      )}

      {/* 사진 목록을 리스트로 표시 */}
      <ul>
        {filteredPhotos.map(photo => (
          <li key={photo.id}>
            {photo.id === editingId ?
              (
                `Editing: ${photo.title}`
              ) : (
                <>
                  {photo.title}
                  {/* 수정 버튼 */}
                  <button onClick={() => startEdit(photo)}>Edit</button>
                  {/* 삭제 버튼 */}
                  <button onClick={() => deletePhoto(photo.id)}>Delete</button>
                </>
              )
            }
          </li>
        ))}
      </ul>
    </>
  )
}
