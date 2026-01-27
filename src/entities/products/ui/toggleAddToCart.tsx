'use client';

import { ShoppingCart } from 'lucide-react';

import { ActionButton } from '@/entities/products/ui';

export const ToggleAddToCart = ({ productId }: { productId: number }) => {
  const handle = () => {
    console.log('Added to cart:', productId);
  };

  return <ActionButton icon={<ShoppingCart />} onClick={handle} />;
};
