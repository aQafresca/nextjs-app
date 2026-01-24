import z from 'zod';

import { ValidationMessages } from '@/shared/constants/validationMessage';

export const addressSchema = z.object({
  street: z.string().trim().min(1, {
    message: ValidationMessages.REQUIRED,
  }),

  city: z.string().trim().min(1, {
    message: ValidationMessages.REQUIRED,
  }),

  zip: z
    .string()
    .trim()
    .min(1, {
      message: ValidationMessages.REQUIRED,
    })
    .regex(/^\d{4,5}$/, {
      message: ValidationMessages.ZIP_INVALID,
    }),

  country: z.enum(['BLR', 'UA'], {
    message: ValidationMessages.REQUIRED,
  }),
});
