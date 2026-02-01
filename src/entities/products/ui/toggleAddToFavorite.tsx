'use client';

import { Heart } from 'lucide-react';

import { useFavoriteStore } from '@/entities/favorites/model';
import type { IProduct } from '@/entities/products/model';
import { ActionButton } from '@/entities/products/ui';

interface Props {
  product: IProduct;
}

export const ToggleAddToFavorite = ({ product }: Props) => {
  const { items, toggle, hasHydrated } = useFavoriteStore();

  const isFavorite =
    hasHydrated && items.some((item) => item.id === product.id);

  return (
    <ActionButton
      icon={<Heart size={20} className={isFavorite ? 'fill-current' : ''} />}
      onClick={() => {
        toggle(product);
      }}
      className={`absolute top-3 right-3 transition-colors ${
        isFavorite ? 'text-red-500' : 'hover:text-red-500'
      }`}
    />
  );
};
