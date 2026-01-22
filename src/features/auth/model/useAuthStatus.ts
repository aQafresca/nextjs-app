import { AuthStatus } from '@/features/auth/model/constants';

import { useAuthStore } from './auth.store';

export function useAuthStatus() {
  const status = useAuthStore((state) => state.status);

  return {
    isAuth: status === AuthStatus.AUTHENTICATED,
    isLoading: status === AuthStatus.LOADING || status === AuthStatus.IDLE,
    isUnauthenticated: status === AuthStatus.UNAUTHENTICATED,
  };
}
