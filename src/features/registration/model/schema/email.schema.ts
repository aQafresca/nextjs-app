import { z } from 'zod';

import { ValidationMessages } from '@/shared/constants/validationMessage';

export const emailSchema = z
  .string()
  .trim()
  .min(1, { message: ValidationMessages.REQUIRED })
  .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
    message: ValidationMessages.EMAIL_INVALID,
  });
