import { z } from 'zod';

export const loginResponseSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  image: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type TLoginResponse = z.infer<typeof loginResponseSchema>;
