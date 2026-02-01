'use client';

import { Suspense, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Loader } from '@/shared/ui/loader';

import { useCartStore } from '@/entities/cart/model';
import { useFavoriteStore } from '@/entities/favorites/model';
import { logout } from '@/features/auth/model';
import { useAuthStatus } from '@/features/auth/model';
import { ThemeSwitcher } from '@/features/theme-switcher/ui';
import { NavLinks, SearchSection, UserMenu } from '@/widgets/header/ui';
import { MobileMenu } from '@/widgets/header/ui';
import { NavActions } from '@/widgets/header/ui';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = useCartStore((state) => state.items.length);
  const favoriteCount = useFavoriteStore((state) => state.items.length);

  const actionCounts = {
    cart: cartCount,
    favorites: favoriteCount,
  };

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const { isAuth } = useAuthStatus();

  return (
    <header className="flex items-center w-full h-20 bg-primary text-white dark:bg-chart-5">
      <div className="container flex items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="icons/logo.svg"
              alt="Company Logo"
              width={40}
              height={40}
            />
          </Link>
          <Suspense fallback={<Loader />}>
            <SearchSection />
          </Suspense>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <NavLinks />
          <div className="hidden lg:flex">
            <NavActions counts={actionCounts} />
          </div>
          <div className="h-6 w-px bg-border mx-1" />
          <ThemeSwitcher />
          <UserMenu logout={logout} isAuth={isAuth} />
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-200"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <Menu />
        </button>

        <MobileMenu
          isAuth={isAuth}
          isOpen={mobileOpen}
          onClose={setMobileOpen}
          logout={logout}
          counts={actionCounts}
        />
      </div>
    </header>
  );
}
