import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';

import { AppErrorKind } from '@/shared/constants';
import { AppError } from '@/shared/lib/errors/form';

import { isFieldErrorMap } from './isFieldErrorMap';

export function handleFormError<T extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<T>,
  defaultMessage = 'Error',
) {
  if (error instanceof AppError) {
    if (
      error.kind === AppErrorKind.VALIDATION &&
      isFieldErrorMap(error.payload)
    ) {
      Object.entries(error.payload).forEach(([field, messages]) => {
        const message = Array.isArray(messages) ? messages[0] : messages;

        setError(field as Path<T>, { type: 'server', message });
      });

      return;
    }

    if (error.kind === AppErrorKind.UNAUTHORIZED) {
      setError('root' as Path<T>, { message: 'incorrect login or password' });

      return;
    }

    setError('root' as Path<T>, { message: error.message });

    return;
  }

  setError('root' as Path<T>, { message: defaultMessage });
}
