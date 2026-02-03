import { tokenStorage } from '@/shared/lib/storage';

import { authFlow } from '@/features/auth/model';
import { useAuthStore } from '@/features/auth/model';

import type { TAuthRequest } from './loginFormSchema';

export async function login(credentials: TAuthRequest) {
  const store = useAuthStore.getState();

  store.setLoading();

  try {
    const { user, accessToken } = await authFlow(credentials);

    tokenStorage.set(accessToken);
    store.setAuthenticated(user);

    return user;
  } catch (error) {
    store.setUnauthenticated();
    throw error;
  }
}
