import type { Control, FieldValues, Path } from 'react-hook-form';

import type { AppErrorKind } from '@/shared/constants';

export interface IFormTextInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  type?: string;
}

export type TAppErrorKind = (typeof AppErrorKind)[keyof typeof AppErrorKind];
