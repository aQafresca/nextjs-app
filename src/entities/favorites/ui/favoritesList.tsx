'use client';

import { useShallow } from 'zustand/react/shallow';

import { EmptyState } from '@/shared/ui/empty-state';
import { Loader } from '@/shared/ui/loader';

import { useFavoriteStore } from '@/entities/favorites/model';
import { ProductCard } from '@/entities/products/ui';

export const FavoritesList = () => {
  const { items, hasHydrated } = useFavoriteStore(
    useShallow((s) => ({
      items: s.items,
      hasHydrated: s.hasHydrated,
    })),
  );

  if (!hasHydrated) return <Loader />;

  if (items.length === 0)
    return <EmptyState message="Your favorites list is empty" />;

  return (
    <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
