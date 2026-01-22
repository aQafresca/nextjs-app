import type { TUser } from '@/entities/user/model';
import type { TLoginResponse } from '@/features/auth/model';

export const mapToUser = (data: TLoginResponse): TUser => ({
  id: data.id,
  username: data.username,
  email: data.email,
  firstName: data.firstName,
  lastName: data.lastName,
  image: data.image,
});
