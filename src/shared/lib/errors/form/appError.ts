import type { TAppErrorKind } from '@/shared/model/types/interface';

export class AppError<T = unknown> extends Error {
  readonly kind: TAppErrorKind;
  readonly status?: number;
  readonly payload?: T;

  constructor(params: {
    kind: TAppErrorKind;
    message: string;
    status?: number;
    payload?: T;
  }) {
    super(params.message);
    this.name = 'AppError';
    this.kind = params.kind;
    this.status = params.status;
    this.payload = params.payload;
  }
}
