import type { TUser } from '@/entities/user/model';
import { authService } from '@/features/auth/api';
import type { TAuthRequest } from '@/features/auth/model';
import { mapToUser } from '@/features/auth/model';
import { loginResponseSchema } from '@/features/auth/model';

export async function authFlow(
  credentials: TAuthRequest,
): Promise<{ user: TUser; accessToken: string }> {
  const raw = await authService.login(credentials);
  const validated = loginResponseSchema.parse(raw);

  return {
    user: mapToUser(validated),
    accessToken: validated.accessToken,
  };
}
