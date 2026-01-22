import { userSchema } from '@/entities/user/model';
import { authService } from '@/features/auth/api';
import { useAuthStore } from '@/features/auth/model';

export async function authInit() {
  const { setLoading, setAuthenticated, setUnauthenticated } =
    useAuthStore.getState();

  setLoading();

  try {
    const raw = await authService.me();
    const user = userSchema.parse(raw);

    setAuthenticated(user);
  } catch {
    setUnauthenticated();
  }
}
