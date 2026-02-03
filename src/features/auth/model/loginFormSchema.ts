import { z } from 'zod';

export const loginFormShema = z.object({
  username: z.string().trim().min(1),
  password: z.string().trim().min(5).max(20),
});

export type TAuthRequest = z.infer<typeof loginFormShema>;

export const loginFormDefaultValues: TAuthRequest = {
  username: 'emilys',
  password: 'emilyspass',
};
