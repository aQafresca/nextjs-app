import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

import { RegistrationForm } from '@/features/registration/ui/registrationForm';

export const RegistrationPage = () => {
  return (
    <div className={'flex grow flex-col justify-center gap-1'}>
      <div className={'w-full max-w-lg'}>
        <h1>Registration</h1>
        <Link
          href={ROUTES.LOGIN}
          className={
            'text-xm text-muted-foreground cursor-pointer hover:text-primary'
          }
        >
          Do you have an account? log in
        </Link>
      </div>
      <RegistrationForm />
    </div>
  );
};
