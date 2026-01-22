import type { ApiErrorResponse } from '@/shared/api/types/apiErrorResponce';
import { AppErrorKind } from '@/shared/constants';
import { AppError } from '@/shared/lib/errors/form/appError';

export function mapHttpError(
  status: number,
  data: ApiErrorResponse | null,
): AppError {
  switch (status) {
    case 400:
    case 422:
      return new AppError({
        kind: AppErrorKind.VALIDATION,
        message: data?.message ?? 'Validation failed',
        status,
        payload: data?.errors,
      });

    case 401:
      return new AppError({
        kind: AppErrorKind.UNAUTHORIZED,
        message: data?.message ?? 'Unauthorized',
        status,
      });

    case 403:
      return new AppError({
        kind: AppErrorKind.FORBIDDEN,
        message: data?.message ?? 'Forbidden',
        status,
      });

    case 404:
      return new AppError({
        kind: AppErrorKind.NOT_FOUND,
        message: data?.message ?? 'Not found',
        status,
      });

    case 500:
    case 502:
    case 503:
      return new AppError({
        kind: AppErrorKind.SERVER,
        message: 'Server error',
        status,
      });

    default:
      return new AppError({
        kind: AppErrorKind.UNKNOWN,
        message: data?.message ?? 'Unknown error',
        status,
      });
  }
}
