import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';

import { Providers } from '@/app/providers';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      <main className="flex-1 container mx-auto px-5">{children}</main>
      <Footer />
    </Providers>
  );
}
