import React from 'react'

const NaverLoginButton = () => {

    const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;

    const redirectURI = encodeURIComponent('http://localhost:3000/login/callback');

  const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}&state=STATE_STRING`;

  return (
    <a href={naverLoginUrl}>Naver로 로그인</a>
  )
}
export default NaverLoginButton;