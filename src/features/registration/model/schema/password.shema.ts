import z from 'zod';

import { ValidationMessages } from '@/shared/constants/validationMessage';

export const passwordSchema = z
  .string()
  .min(8, { message: ValidationMessages.PASSWORD_TOO_SHORT })
  .max(128)
  .refine((value) => /[a-z]/.test(value), {
    message: ValidationMessages.PASSWORD_MISSING_LOWERCASE,
  })
  .refine((value) => /[A-Z]/.test(value), {
    message: ValidationMessages.PASSWORD_MISSING_UPPERCASE,
  })
  .refine((value) => /\d/.test(value), {
    message: ValidationMessages.PASSWORD_MISSING_DIGIT,
  });
