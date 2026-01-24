import z from 'zod';

import { ValidationMessages } from '@/shared/constants/validationMessage';

export const phoneSchema = z.object({
  mobile: z
    .string()
    .min(1, ValidationMessages.REQUIRED)
    .regex(/^\+?[1-9]\d{1,14}$/, ValidationMessages.PHONE_NUMBER),
});
