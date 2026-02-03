import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

import { LoginForm } from '@/features/auth/ui';

export const LoginPage = () => {
  return (
    <div className={'flex grow flex-col items-center justify-center gap-1'}>
      <div className={'w-full max-w-lg'}>
        <h1>Login</h1>
        <Link
          href={ROUTES.REGISTRATION}
          className={
            'text-xm text-muted-foreground cursor-pointer hover:text-primary'
          }
        >
          Dont have an account? registration
        </Link>
      </div>
      <LoginForm />
    </div>
  );
};
