import { NextRequest, NextResponse } from 'next/server';
import { getUser, verifyAuth } from './auth/JwtContext';



function isLocalhost(url:string ) {
   return url.includes('localhost') || url.includes('127.0.0.1')
}
function localUrl(){ return NextResponse.rewrite(new URL('http://www.mbz2.ir:80/'))}

export async function middleware(req: NextRequest) {
  const { href , pathname, port } = req.nextUrl

  const token = req.cookies.get('token')?.value || process.env.TOKEN
  if(isLocalhost(href)) localUrl()

    const verifiedToken = 
    token && 
    (await verifyAuth(token).catch((err) => {
      console.log('err :>> ', err);
    }))


    if(verifiedToken) {
       await getUser(token);
    }

    if(pathname.startsWith("/login") && !verifiedToken ) {
      return
    }

    if(verifiedToken ) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    // if(req.url.includes("/login") && verifiedToken ) {
    //   return NextResponse.redirect(new URL('dashboard', req.url))
    // }
    // if(!verifiedToken ) {
    //   return NextResponse.redirect(new URL('/login', req.url))
    // }
    return NextResponse.next();
}


export const config = {
  matcher: ['/']
}