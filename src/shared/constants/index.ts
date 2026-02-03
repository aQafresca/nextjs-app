export enum ButtonLabel {
  SUBMIT = 'Submit',
}

export const ENDPOINTS_URL = {
  HOME: '/',
  AUTH: '/auth/login',
  ME: '/auth/me',
  PRODUCTS: '/products',
  PRODUCTS_SEARCH: '/products/search',
  PRODUCTS_CATEGORIES: '/products/categories',
  PRODUCTS_CATEGORY: '/products/category',
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  DETAIL: '/product',
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

export const LocalStorageKeys = {
  CART: 'cart - storage',
  FAVORITES: 'favorites',
};

export const PLACEHOLDERS = {
  USERNAME: 'example',
  LASTNAME: 'example',
  PASSWORD: '*********',
  EMAIL: 'example@gmail.com',
  CITY: 'city',
  COUNTRY: 'country',
  STREET: 'street',
  ZIP: 'ZIP code (4-5 digits)',
  PHONE: '+375(29)2234466',
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

export const PARAMS_NAME = {
  QUERY: 'query',
  PAGE: 'page',
  CATEGORY: 'category',
};
