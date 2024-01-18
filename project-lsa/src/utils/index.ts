import { useCookies } from "react-cookie";

// 유틸리티 함수나 헬퍼 함수를 보관
export const tmp = '';

// 토큰(Token), 쿠키(Cookie)
// : 웹상에서 정보를 저장하고 전송하는 방법들
// : HTTP 통신 (post, get, put, delete)에서 해당 정보를 저장

//! 토큰
// : 사용자 인증 및 권한 부여에 사용되는 암호화된 문자열
// : 서버에서 사용자 인증을 진행하고, 해당 사용자에 대한 세션 정보를 나타냄

// ex) 사용자가 로그인 > 서버는 사용자의 인증 정보를 확인, 토큰 생성
//      > 생성된 토큰을 사용하여 이후의 요청에 자신을 인증 
//        (HTTP 헤더에 포함하여 서버로 전송)

//! 쿠키
// : 웹사이트가 사용자의 브라우저에 저장하는 작은 데이터 조각
// : 사용자의 세션관리, 개인화 설정, 추적 등에 사용

// ex) 사용자가 웹 사이트에 방문 > 사이트는 쿠키를 생성하여 브라우저에 저장
//      > 이후 사용자가 다시 해당 사이트 사이트에 방문
//      > 브라우저가 쿠키 정보를 사이트에 전달하여 사용자를 식별

//? react-cookie
// 1. 설치
// npm install react-cookie

// 2. 쿠키 생성
// : 로그인을 통한 사용자 내역을 저장
// - useCookies() 훅 사용
// - : 쿠키를 가져오고 설정, 삭제에 필요한 함수를 제공
export const useTokenService = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

  const setToken = (token: any) => {
    // setCookie 
    // 첫 번째 요소: 쿠키명
    // 두 번째 요소: 실제 쿠키
    // 세 번째 요소: 쿠키가 설정될 때 사용되는 경로
    //  > 쿠키가 유효한 URL 경로 결정
    //  > { path: '/'}: 전체 사이트 어디서든지 접근 가능
    setCookie('userToken', token, { path: '/'})
  }

  const removeToken = () => {
    removeCookie('userToken', { path: '/'});
  }

  return {setToken, removeToken};
}

// 3. 쿠키 읽기
// : 사용자의 내역이 필요한 화면에 불러오기
let token;

const useToken = () => {
  const [cookies] = useCookies(['userToken']);
  token = cookies.userToken;
  return cookies.userToken;
}

// 로그인 로직 후 토큰을 생성하고 저장
const Login = () => {
  const {setToken} = useTokenService();

  const handleLogin = () => {
    const token = 'your-token';
    setToken(token);
  }
}

// return (
//   <button onclick={handleLogin}>Login</button>
// )

// 4. 쿠키 삭제
// : 기간 만료 | 로그아웃 시에 사용자 내역을 삭제