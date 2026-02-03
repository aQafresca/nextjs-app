import {
  Heart,
  LogIn,
  LogOut,
  ShoppingCart,
  User,
  UserPlus,
} from 'lucide-react';

import { ROUTES } from '@/shared/constants';

import type { INavLinkItem } from '@/widgets/header/model';

import { navAction, navLink, navTextLink } from './nav.factories';

export const shopActionsLinks: INavLinkItem[] = [
  navLink('cart', ROUTES.CART, 'Cart', { kind: 'lucide', icon: ShoppingCart }),
  navLink('favorites', ROUTES.FAVORITES, 'Favorites', {
    kind: 'lucide',
    icon: Heart,
  }),
];

export const navUserMenuLinks = (isAuth: boolean) =>
  isAuth
    ? [
        navLink('profile', ROUTES.PROFILE, 'Profile', {
          kind: 'lucide',
          icon: User,
        }),
        navAction('logout', 'logout', 'Logout', {
          kind: 'lucide',
          icon: LogOut,
        }),
      ]
    : [
        navLink('login', ROUTES.LOGIN, 'Login', {
          kind: 'lucide',
          icon: LogIn,
        }),
        navLink('registration', ROUTES.REGISTRATION, 'Registration', {
          kind: 'lucide',
          icon: UserPlus,
        }),
      ];

export const commonNavLinks = [
  navTextLink('about', ROUTES.ABOUT, 'About'),
  navTextLink('shops', ROUTES.SHOPS, 'All shops'),
  navTextLink('merchant', ROUTES.MERCHANT, 'Become a merchant'),
];

export const navMobileMenuLinks = (isAuth: boolean) => [
  navLink('home', '/', 'Home', {
    kind: 'src',
    src: '/icons/logo.svg',
  }),
  ...navUserMenuLinks(isAuth),
  ...commonNavLinks,
];
