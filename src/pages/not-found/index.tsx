import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

export const NotFoundPage = () => {
  return (
    <div className={'flex flex-col grow justify-center items-center gap-6'}>
      <h1 className={'text-4xl md:text-6xl'}>Error 404</h1>
      <h2>This page doesn&#39;t exist</h2>
      <Link href={ROUTES.HOME} className={'hover:underline'}>
        ← Back to Home
      </Link>
    </div>
  );
};
