// routes
// utils
import { PATH_AUTH } from '@/routes/paths';
import callApi from '@/services/axios';
import axios from 'axios';

// ----------------------------------------------------------------------

// function jwtDecode(token: string) {
//   const base64Url = token.split('.')[1];
//   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   const jsonPayload = decodeURIComponent(
//     window
//       .atob(base64)
//       .split('')
//       .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
//       .join('')
//   );

//   return JSON.parse(jsonPayload);
// }

function jwtDecode(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = Buffer.from(base64, 'base64').toString('utf-8');

  return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export const isValidToken = (accessToken: string) => {
  // console.log("-----------------------------------------------------------accessToken2",accessToken);
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  // decoded ==> {
  //   sub: '09550000012',
  //   aud: 'ssoClient-2',
  //   nbf: 1692692136,
  //   scope: [ 'openid' ],
  //   iss: 'http://apifpr.mresalat1.com:8080/sso',
  //   id: '12',
  //   exp: 1692872136,
  //   iat: 1692692136
  // }
  // const oneDay = 24 * 60 * 60 * 1000     //     { expires: Date.now() - oneDay }
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

export const tokenExpired = (exp: number) => {
  // eslint-disable-next-line prefer-const
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    // callback_tokenExpired()
    alert('Token expired');
    localStorage.removeItem('access_token');
    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

// ----------------------------------------------------------------------

export const setSession = (accessToken: string | any) => {
  if (accessToken) {
    localStorage.setItem('access_token', accessToken);
    // callApi().defaults.headers.common.Authorization =
    callApi().defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    tokenExpired(exp);
  } else {
    localStorage.removeItem('access_token');
    delete callApi().defaults.headers.common.Authorization;
  }
};
