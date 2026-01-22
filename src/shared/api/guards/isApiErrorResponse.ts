import type { ApiErrorResponse } from '@/shared/api/types/apiErrorResponce';

export const isApiErrorResponse = (
  value: unknown,
): value is ApiErrorResponse => {
  if (typeof value !== 'object' || value === null) return false;

  return 'message' in value || 'errors' in value;
};
