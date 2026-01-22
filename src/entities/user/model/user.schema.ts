import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  image: z.string(),
});

export type TUser = z.infer<typeof userSchema>;
