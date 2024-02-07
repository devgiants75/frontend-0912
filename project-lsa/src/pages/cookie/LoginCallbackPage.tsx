import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const getEnvVariable = (key: string, defaultValue: string = ''): string => {
  const value = process.env[key];
  if (typeof value === 'string') {
    return value;
  }
  return defaultValue;
};

const LoginCallbackPage = () => {
  const location = useLocation();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    const clientId = getEnvVariable('REACT_APP_NAVER_CLIENT_ID');
    const clientSecret = getEnvVariable('REACT_APP_NAVER_CLIENT_SECRET');

    if (code) {
      fetch('https://nid.naver.com/oauth2.0/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: clientId,
          client_secret: clientSecret,
          code,
          state: 'STATE_STRING',
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Access Token:', data.access_token);
      })
      .catch(error => {
        console.error('Error fetching token:', error);
      });
    }
  }, [location]);

  return (
    <div>
      로그인 처리 중 
    </div>
  )
}
export default LoginCallbackPage;