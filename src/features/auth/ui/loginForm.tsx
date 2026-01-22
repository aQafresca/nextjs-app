'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { ButtonLabel, PLACEHOLDERS, ROUTES } from '@/shared/constants';
import { handleFormError } from '@/shared/lib/errors/form/handleFormError';
import { Button } from '@/shared/ui/button';
import { FormError } from '@/shared/ui/error';
import { FormInput } from '@/shared/ui/fields/form';
import { Form } from '@/shared/ui/form';

import { login } from '@/features/auth/model/login';
import {
  loginFormDefaultValues,
  loginFormShema,
  type TAuthRequest,
} from '@/features/auth/model/loginFormSchema';

import { zodResolver } from '@hookform/resolvers/zod';

export const LoginForm = () => {
  const router = useRouter();

  const form = useForm<TAuthRequest>({
    resolver: zodResolver(loginFormShema),
    defaultValues: loginFormDefaultValues,
  });

  const onSubmit = async (data: TAuthRequest) => {
    try {
      await login(data);
      router.push(ROUTES.HOME);
    } catch (error) {
      handleFormError(error, form.setError);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
        className={' w-full max-w-lg flex flex-col gap-2'}
      >
        <FormError className={'min-h-8'} error={form.formState.errors.root} />

        <FormInput
          name="username"
          control={form.control}
          label="Username"
          placeholder={PLACEHOLDERS.USERNAME}
        />
        <FormInput
          name="password"
          control={form.control}
          label="Password"
          placeholder={PLACEHOLDERS.PASSWORD}
          type="password"
        />

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
