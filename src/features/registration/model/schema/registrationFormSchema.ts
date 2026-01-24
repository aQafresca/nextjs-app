import z from 'zod';

import {
  addressSchema,
  emailSchema,
  nameSchema,
  passwordSchema,
  phoneSchema,
  radioSchema,
} from '@/features/registration/model';

export const registrationFormSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  phone: phoneSchema,
  address: addressSchema,
  radio: radioSchema,
});

export type TRegistrationFormSchema = z.infer<typeof registrationFormSchema>;

export const registrationFormDefaultValues: TRegistrationFormSchema = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: {
    mobile: '',
  },
  address: {
    country: 'BLR',
    city: '',
    street: '',
    zip: '',
  },
  radio: {
    archived: 'YES',
    active: 'NO',
    shipping: 'YES',
  },
};
