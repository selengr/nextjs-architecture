"use client"

import { useEffect } from "react"
import { useRouter,useSearchParams } from 'next/navigation';

import { GetToken } from '@/auth/getToken';
import { LOCALHOST } from '@/config-global';

const AuthVerify = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    
  useEffect(()=>{
//   const Verify = () =>{
    (async () => {
      const code = searchParams?.get('code') + ''
      const accessToken =  localStorage.getItem('access_token') + ''

      if (code.length > 10 && accessToken.length < 5 ) {
             await GetToken(code, LOCALHOST)
             return router.push("/")
         }
      })()
  }
  ,[])

    return <>{children}</>
}

export default AuthVerify;