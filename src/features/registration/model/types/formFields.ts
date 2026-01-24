import type { Control } from 'react-hook-form';

import type { TRegistrationFormSchema } from '@/features/registration/model';

export interface IFormFieldsProps {
  control: Control<TRegistrationFormSchema>;
}
