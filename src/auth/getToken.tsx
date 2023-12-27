// import callApi from "@/services/axios";

import { AUTH_API } from '@/config-global';
import { TRequestOptions, URLSearchParamsType } from './types';
import { setSession } from './utils';

export const GetToken = async (code: string, redirectUrl: string) => {
  const urlencoded: URLSearchParamsType = {
    client_id: 'ssoClient-2',
    client_secret: 'ssoClientSecret-2',
    grant_type: 'authorization_code',
    redirect_uri: redirectUrl,
    // code_verifier : "Bq187ESUqFq7lEoxJJw0wZndiojms9mPjdzOJbOfBet",
    code
  };

  const requestOptions: TRequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(urlencoded),
    redirect: 'follow'
  };

  try {
    // const response = await callApi().post("http://apifpr.mresalat1.com/sso/oauth2/token",requestOptions)
    // https://stage1api.qhami.com/sso/oauth2/token
    let response = await fetch(AUTH_API.domain+'/sso/oauth2/token',requestOptions);
    const data = await response.json();
    setSession(data.access_token);
  } catch (error) {
    console.log('errorrrr', error);
  }
};
