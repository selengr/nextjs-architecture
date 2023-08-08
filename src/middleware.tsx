import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { HOST_API_KEY } from './config-global';
import { verifyAuth } from './auth/JwtContext';



// const Login = async () => {
//   try {
//      const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//            username: 'kminchelle',
//            password: '0lelplR',
//            // expiresInMins: 60, // optional
//         })
//      });
     
//      if (!response.ok) {
//         throw new Error('Login failed');
//      }

//      const data = await response.json();
//      return data;
//   } catch (error) {
//      console.error('Login error:', error);
//      throw error;
//   }
// }








// function isLocalhost(url:string ) {
//     return url.includes('localhost') || url.includes('127.0.0.1');
// }

// export async function middleware(req: NextRequest) {
//   const { href , pathname,port } = req.nextUrl
//   const token = await getToken({ req })


//   if (isLocalhost(href)){
//    return NextResponse.rewrite(new URL('http://www.mbz2.ir:80/',req.nextUrl))
//  }

//   // const token = req ? req.cookies?.token : null;
//   // const profile = await getProfile(token);
 
//   // if ( pathname.includes("/login") || profile ) {
//   //   return NextResponse.next();
//   // }
//   // if (!profile && pathname !== "/login") {
//   //   return NextResponse.redirect("/");
//   // }


 

// //   console.log("-----------------------------------",Login())
//   return NextResponse.next();
// }



























export async function middleware(req: NextRequest) {
  const { href , pathname,port } = req.nextUrl

const token = await localStorage.getItem('token')


const verifiedToken = 
token && 
    (await verifyAuth(token).catch((err) => {
      console.log('err :>> ', err);
    }))


    if(pathname.startsWith("/login") && !verifiedToken ) {
      return
    }

    if(req.url.includes("/login") && verifiedToken ) {
      return NextResponse.redirect(new URL('dashboard', req.url))
    }

    if(!verifiedToken ) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

}



export const config = {
  matcher: ['/']
}