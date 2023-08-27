// import callApi from "@/services/axios";

// import { cookies } from "next/headers";
import { TRequestOptions, URLSearchParamsType } from "./types";
import { isValidToken, setSession } from "./utils";


export const GetToken = async (code : string  , redirectUrl: string ) => {

      const urlencoded : URLSearchParamsType  = {
        client_id: "ssoClient-2",
        client_secret: "ssoClientSecret-2",
        grant_type:  "authorization_code",
        redirect_uri: redirectUrl,
        // code_verifier : "Bq187ESUqFq7lEoxJJw0wZndiojms9mPjdzOJbOfBet",
        code,
      };
      

      const requestOptions : TRequestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(urlencoded),
        redirect: 'follow'
      };

      try {
      // const response = await callApi().post("http://apifpr.mresalat1.com/sso/oauth2/token",requestOptions)
        let response =  await fetch("http://apifpr.mresalat1.com/sso/oauth2/token", requestOptions)
        const data = await response.json();
        return data.access_token
      } catch (error) {
        console.log('errorrrr', error)
      }
    }
    

    export const VerifiedToken = (access_token: string | undefined,callback_tokenExpired:any ) => {
   
          // console.log('isValidToken(access_token) ************* :>> ', isValidToken(access_token));
          // console.log('setSession(access_token) ************* :>> ',  setSession(access_token));
          // cookies().get('code')           
          // console.log('  cookies :>> ', ); 

       if (access_token && isValidToken(access_token)) {
           setSession(access_token,callback_tokenExpired);
   
       } else {
         // If the token isn't valid for any reason, we want to clear it from localstorage and redirect to login page
       }   
   }