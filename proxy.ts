import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { COOKIE_KEYS, ROUTES } from '@/shared/constants';

const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTRATION];
const PROTECTED_ROUTES = [ROUTES.PROFILE];

export function proxy(request: NextRequest) {
  const token = request.cookies.get(COOKIE_KEYS.TOKEN)?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  }

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/registration', '/profile/:path*'],
};
