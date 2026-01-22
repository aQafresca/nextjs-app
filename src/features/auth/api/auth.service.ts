import { client } from '@/shared/api';
import { ENDPOINTS_URL } from '@/shared/constants';

import type { TAuthRequest } from '@/features/auth/model';
import type { TLoginResponse } from '@/features/auth/model/loginResponseShema';

export const authService = {
  login: (credentials: TAuthRequest) =>
    client<TLoginResponse>({
      endpoint: ENDPOINTS_URL.AUTH,
      options: { method: 'POST', body: JSON.stringify(credentials) },
    }),

  me: () =>
    client<TLoginResponse>({
      endpoint: ENDPOINTS_URL.ME,
      options: { method: 'GET' },
    }),
};
