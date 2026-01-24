'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { ButtonLabel, ROUTES } from '@/shared/constants';
import { handleFormError } from '@/shared/lib/errors/form';
import { Button } from '@/shared/ui/button';
import { FormError } from '@/shared/ui/error';
import { Form } from '@/shared/ui/form';

import {
  registrationFormDefaultValues,
  registrationFormSchema,
  type TRegistrationFormSchema,
} from '@/features/registration/model';
import { AddressFields } from '@/features/registration/ui/addressFields';
import { UserFields } from '@/features/registration/ui/userFields';

import { zodResolver } from '@hookform/resolvers/zod';

export const RegistrationForm = () => {
  const router = useRouter();

  const form = useForm<TRegistrationFormSchema>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: registrationFormDefaultValues,
  });

  const onSubmit = (data: TRegistrationFormSchema) => {
    try {
      router.push(ROUTES.PROFILE);
      console.log(data);
    } catch (error) {
      handleFormError(error, form.setError);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
        className={' w-full flex flex-col border border-input rounded-lg p-4'}
      >
        <FormError className={'min-h-8'} error={form.formState.errors.root} />
        <div className={'flex w-full gap-4 max-md:flex-col'}>
          <UserFields control={form.control} />

          <AddressFields control={form.control} />
        </div>

        <Button
          variant="default"
          size={'sm'}
          type="submit"
          disabled={form.formState.isSubmitting}
          className={'max-w-xs self-center w-full mt-4'}
        >
          {ButtonLabel.SUBMIT}
        </Button>
      </form>
    </Form>
  );
};
