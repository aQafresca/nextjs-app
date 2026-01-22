import { tokenStorage } from '@/shared/lib/storage';

import { useAuthStore } from '@/features/auth/model';

export const logout = () => {
  const store = useAuthStore.getState();

  tokenStorage.clear();
  store.setUnauthenticated();
};
