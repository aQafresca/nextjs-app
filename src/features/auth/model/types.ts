import type { AuthStatus } from '@/features/auth/model';

export type TAuthStatus = (typeof AuthStatus)[keyof typeof AuthStatus];
