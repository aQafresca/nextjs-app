import Cookies from 'js-cookie';

import { COOKIE_KEYS } from '@/shared/constants';

export const tokenStorage = {
  get(): string | undefined {
    return Cookies.get(COOKIE_KEYS.TOKEN);
  },
  set(token: string) {
    return Cookies.set(COOKIE_KEYS.TOKEN, token, {
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      expires: 7,
    });
  },
  clear() {
    Cookies.remove(COOKIE_KEYS.TOKEN, { path: '/' });
  },
};
