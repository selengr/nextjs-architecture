import { NextRequest, NextResponse } from 'next/server';
import { verifyAuth } from './auth/JwtContext';
import { LOCALHOST } from './config-global';
import { cookies } from 'next/headers';
import { GetToken } from './auth/getToken';
import { PATH_AUTH } from './routes/paths';

function isLocalhost(url: string) {
  return url.includes('localhost') || url.includes('127.0.0.1');
}
function localUrl() {
  return NextResponse.rewrite(new URL('http://www.mbz2.ir:80/'));
}

export async function middleware(req: NextRequest, res: NextResponse) {
  const { href, pathname, port, searchParams } = req.nextUrl;
  const access_token = req.cookies.get('access_token')?.value ?? undefined;
  const has_token = req.cookies.has('access_token');

  if (pathname.startsWith('/_next')) return NextResponse.next();
  if (isLocalhost(href)) localUrl();

  // if (req.nextUrl.search.includes('code') && !has_token) {
  //   const response = NextResponse.next();
    // let code : string = req.nextUrl?.searchParams?.get('code') ?? ""
    // const token = await GetToken(code, LOCALHOST)
    // req.nextUrl.searchParams.delete('code')
    // response.cookies.set("access_token", token)
    // NextResponse.redirect(new URL(LOCALHOST))
  //   return response;
  // }

  //  if(!has_token){
  //     return NextResponse.redirect(new URL( PATH_AUTH.login ))
  //   }

  // const verifiedToken =
  // access_token &&
  // (await verifyAuth(access_token).catch((err) => {
  //   console.log('err :>> ', err);
  // }))

  //  const callback_tokenExpired = async () => {
  //      req.cookies.delete('code');
  //      req.cookies.delete('access_token');
  //      console.log(("you token has ex")); // this should be a alart in the future
  //      return NextResponse.redirect(new URL( PATH_AUTH.login ))
  //   }

  // if(verifiedToken) {
  //    await getUser(token);
  // }

  // if(pathname.startsWith("/login") && !verifiedToken ) {
  //   return
  // }

  // if(verifiedToken ) {
  //   return NextResponse.redirect(new URL('/', req.url))
  // }

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
};
