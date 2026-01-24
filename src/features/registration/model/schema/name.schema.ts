import { z } from 'zod';

export const nameSchema = z
  .string()
  .trim()
  .min(1)
  .max(50)
  .regex(/^[\p{L}.'-]+$/u);
