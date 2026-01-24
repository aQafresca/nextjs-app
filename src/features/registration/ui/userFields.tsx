'use client';

import { PLACEHOLDERS } from '@/shared/constants';
import { FormInput } from '@/shared/ui/fields/formInput';
import { FormRadio } from '@/shared/ui/fields/formRadio';

import type { IFormFieldsProps } from '../model';
import { FormRadioLabel, FormRadioTitle } from '../model';

export const UserFields = ({ control }: IFormFieldsProps) => {
  return (
    <div className={'w-full'}>
      <FormInput
        name="email"
        control={control}
        label="Email address *"
        placeholder={PLACEHOLDERS.EMAIL}
        type="email"
      />
      <FormInput
        name="password"
        control={control}
        label="Password *"
        placeholder={PLACEHOLDERS.PASSWORD}
        type="password"
      />
      <div className={'flex'}>
        <FormRadio
          control={control}
          name="radio.archived"
          options={FormRadioLabel}
          title={FormRadioTitle.ARCHIVED}
        />

        <FormRadio
          control={control}
          name="radio.active"
          options={FormRadioLabel}
          title={FormRadioTitle.ACTIVE}
        />
      </div>
      <FormInput
        name="firstName"
        control={control}
        label="First name *"
        placeholder={PLACEHOLDERS.USERNAME}
      />
      <FormInput
        name="lastName"
        control={control}
        label="Last name *"
        placeholder={PLACEHOLDERS.USERNAME}
      />
      <FormInput
        name="phone.mobile"
        control={control}
        label="Mobile number *"
        placeholder={PLACEHOLDERS.PHONE}
      />
    </div>
  );
};
