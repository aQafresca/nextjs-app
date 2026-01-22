import { isApiErrorResponse } from '@/shared/api/guards';
import { mapHttpError } from '@/shared/api/mapHttpError';
import { AppErrorKind } from '@/shared/constants';
import { AppError } from '@/shared/lib/errors/form';
import { tokenStorage } from '@/shared/lib/storage';

interface IClientProps {
  endpoint: string;
  options?: RequestInit;
}

export async function client<T>({
  endpoint,
  options,
}: IClientProps): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new AppError({
      kind: AppErrorKind.UNKNOWN,
      message: 'API base URL missing',
    });
  }

  const headers = new Headers(options?.headers);

  const isStringBody = typeof options?.body === 'string';

  if (isStringBody && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const token = tokenStorage.get();

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  let response: Response;

  try {
    response = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers,
    });
  } catch (error) {
    throw new AppError({
      kind: AppErrorKind.NETWORK,
      message: 'Network error',
      payload: error,
    });
  }

  const text = await response.text();

  let parsed: unknown = null;

  if (text) {
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = null;
    }
  }

  if (!response.ok) {
    const errorData = isApiErrorResponse(parsed) ? parsed : null;

    throw mapHttpError(response.status, errorData);
  }

  return parsed as T;
}
