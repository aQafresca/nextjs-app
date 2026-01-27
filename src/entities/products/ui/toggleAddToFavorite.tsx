'use client';

import { Heart } from 'lucide-react';

import { ActionButton } from '@/entities/products/ui';

export const ToggleAddToFavorite = ({ productId }: { productId: number }) => {
  const handle = () => {
    console.log('Added to Favorites:', productId);
  };

  return (
    <ActionButton
      icon={<Heart size={20} />}
      onClick={handle}
      className="hover:text-red-500 absolute top-3 right-3"
    />
  );
};
