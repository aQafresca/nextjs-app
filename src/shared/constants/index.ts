export enum ButtonLabel {
  SUBMIT = 'Submit',
}

export const ENDPOINTS_URL = {
  HOME: '/',
  AUTH: '/auth/login',
  ME: '/auth/me',
  PRODUCTS: '/products',
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  DETAIL: '/products',
  PROFILE: '/profile',
  MERCHANT: '/merchant',
  SHOPS: '/shops',
  ABOUT: '/about',
  CART: '/cart',
  FAVORITES: '/favorites',
};

export const COOKIE_KEYS = {
  TOKEN: 'access_token',
};

export const PLACEHOLDERS = {
  USERNAME: 'example',
  PASSWORD: '*********',
};

export const AppErrorKind = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  VALIDATION: 'VALIDATION',
  NOT_FOUND: 'NOT_FOUND',
  NETWORK: 'NETWORK',
  SERVER: 'SERVER',
  UNKNOWN: 'UNKNOWN',
} as const;
