import { client } from '@/shared/api';
import { ENDPOINTS_URL } from '@/shared/constants';

import type { TAuthRequest } from '@/features/auth/model';
import type { TLoginResponse } from '@/features/auth/model/loginResponseSchema';

export const authService = {
  login: (credentials: TAuthRequest) =>
    client<TLoginResponse>({
      endpoint: ENDPOINTS_URL.AUTH,
      method: 'POST',
      body: credentials,
    }),

  me: () =>
    client<TLoginResponse>({
      endpoint: ENDPOINTS_URL.ME,
      method: 'GET',
    }),
};
