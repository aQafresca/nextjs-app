import { create } from 'zustand';

import type { TUser } from '@/entities/user/model';
import { AuthStatus, type TAuthStatus } from '@/features/auth/model';

interface AuthState {
  user: TUser | null;
  status: TAuthStatus;
  setLoading: () => void;
  setAuthenticated: (user: TUser) => void;
  setUnauthenticated: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: AuthStatus.IDLE,
  setLoading: () => {
    set({ status: AuthStatus.LOADING, user: null });
  },
  setAuthenticated: (user) => {
    set({ user, status: AuthStatus.AUTHENTICATED });
  },
  setUnauthenticated: () => {
    set({ user: null, status: AuthStatus.UNAUTHENTICATED });
  },
}));
