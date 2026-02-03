import React, { Suspense } from 'react';

import { Loader } from '@/shared/ui/loader';

import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';

import { Providers } from '@/app/providers';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      <main className="flex-1 flex flex-col container mx-auto px-5">
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <Footer />
    </Providers>
  );
}
