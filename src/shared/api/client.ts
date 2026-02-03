import { isApiErrorResponse } from '@/shared/api/guards';
import { mapHttpError } from '@/shared/api/mapHttpError';
import { AppErrorKind } from '@/shared/constants';
import { AppError } from '@/shared/lib/errors/form';
import { tokenStorage } from '@/shared/lib/storage';

interface IClientProps<TBody = unknown> extends Omit<RequestInit, 'body'> {
  endpoint: string;
  params?: Record<string, string | number | boolean | undefined>;
  body?: TBody;
}

export async function client<TResponse, TBody = unknown>({
  endpoint,
  params,
  body,
  ...options
}: IClientProps<TBody>): Promise<TResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new AppError({
      kind: AppErrorKind.UNKNOWN,
      message: 'API base URL missing',
    });
  }

  const url = new URL(`${baseUrl}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.append(key, String(value));
    });
  }

  const headers = new Headers(options.headers);

  let requestBody: BodyInit | undefined = undefined;

  if (body !== undefined) {
    if (typeof body === 'object') {
      requestBody = JSON.stringify(body);
      headers.set('Content-Type', 'application/json');
    } else {
      requestBody = String(body);
    }
  }

  const token = tokenStorage.get();

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  let response: Response;

  try {
    response = await fetch(url.toString(), {
      ...options,
      headers,
      body: requestBody,
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

  return parsed as TResponse;
}
