import z from 'zod';

import { ValidationMessages } from '@/shared/constants/validationMessage';

export const radioSchema = z.object({
  archived: z.enum(['YES', 'NO'], { message: ValidationMessages.REQUIRED }),
  active: z.enum(['YES', 'NO'], { message: ValidationMessages.REQUIRED }),
  shipping: z.enum(['YES', 'NO'], {
    message: ValidationMessages.REQUIRED,
  }),
});
