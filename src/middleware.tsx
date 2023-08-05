import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { HOST_API_KEY } from './config-global';
import { AuthProvider } from './auth/JwtContext';

function isLocalhost(url:string ): boolean {
    return url.includes('localhost') || url.includes('127.0.0.1');
}
export default async function middleware(req: NextRequest) {
  const { href , pathname,port } = req.nextUrl
  const token = await getToken({ req })
  console.log("----------------------",href, pathname,"===========",port)
  // if (token) {
  //     return NextResponse.redirect(new URL('/sign-in', req.nextUrl))
  //   }
   if (isLocalhost(href)){
     return NextResponse.rewrite(new URL('http://www.mbz2.ir:80/',req.nextUrl))
   }

}

export const config = {
  matcher: ['/']
};

// export const config = {
//   matcher: [
//     /*
//      * Match all paths except for:
//      * 1. /api routes
//      * 2. /_next (Next.js internals)
//      * 3. /_static (inside /public)
//      * 4. all root files inside /public (e.g. /favicon.ico)
//      */
//     "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
//   ],
// };

// export default async function middleware(req: NextRequest) {
//   const url = req.nextUrl;

//   // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
//   const hostname = req.headers
//     .get("host")!
//     .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

//   // Get the pathname of the request (e.g. /, /about, /blog/first-post)
//   const path = url.pathname;

//   // rewrites for app pages
//   if (hostname == `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
//     const session = await getToken({ req });
//     if (!session && path !== "/login") {
//       return NextResponse.redirect(new URL("/login", req.url));
//     } else if (session && path == "/login") {
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//     return NextResponse.rewrite(
//       new URL(`/app${path === "/" ? "" : path}`, req.url),
//     );
//   }

//   // special case for `vercel.pub` domain
//   if (hostname === "vercel.pub") {
//     return NextResponse.redirect(
//       "https://vercel.com/blog/platforms-starter-kit",
//     );
//   }

//   // rewrite root application to `/home` folder
//   if (
//     hostname === "localhost:3000" ||
//     hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
//   ) {
//     return NextResponse.rewrite(new URL(`/home${path}`, req.url));
//   }

//   // rewrite everything else to `/[domain]/[path] dynamic route
//   return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
// }
