// // pages/_middleware.js
// import { NextResponse } from 'next/server';
// import Cookies from 'js-cookie';

// export async function middleware(request) {
//   const token = Cookies.get('Tokensss');
  
//   if (!token && request.nextUrl.pathname !== '/auth') {
//     return NextResponse.redirect(new URL('/auth', request.url));
//   }

//   return NextResponse.next();
// }
