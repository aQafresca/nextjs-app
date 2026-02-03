'use client';

import { PLACEHOLDERS } from '@/shared/constants';
import { FormInput } from '@/shared/ui/fields/formInput';
import { FormRadio } from '@/shared/ui/fields/formRadio';
import { FormSelect } from '@/shared/ui/fields/formSelect';

import {
  FormRadioLabel,
  FormRadioTitle,
  type IFormFieldsProps,
} from '../model';
import { FormCountry } from '../model';

export const AddressFields = ({ control }: IFormFieldsProps) => {
  return (
    <div className={'w-full'}>
      <FormInput
        name="address.city"
        control={control}
        label="City *"
        placeholder={PLACEHOLDERS.CITY}
      />

      <FormInput
        name="address.street"
        control={control}
        label="Street *"
        placeholder={PLACEHOLDERS.STREET}
      />

      <FormInput
        name="address.zip"
        control={control}
        label="Zip code *"
        placeholder={PLACEHOLDERS.ZIP}
      />

      <FormRadio
        name="radio.shipping"
        control={control}
        options={FormRadioLabel}
        title={FormRadioTitle.SHIPPING}
      />

      <FormSelect
        control={control}
        name="address.country"
        label="Country *"
        options={FormCountry}
        placeholder={PLACEHOLDERS.COUNTRY}
      />
    </div>
  );
};
