'use client';

import { ShoppingCart } from 'lucide-react';

import { type ICartItem, useCartStore } from '@/entities/cart/model';
import { ActionButton } from '@/entities/products/ui';
import { AddedToCartIcon } from '@/entities/products/ui';

export const AddToCart = ({ cartItem }: { cartItem: ICartItem }) => {
  const isItemInCart = useCartStore((state) =>
    state.items.some((item) => item.id === cartItem.id),
  );
  const handleAddToCart = () => {
    useCartStore.getState().add(cartItem);
  };

  return (
    <ActionButton
      icon={isItemInCart ? <AddedToCartIcon /> : <ShoppingCart />}
      onClick={handleAddToCart}
    />
  );
};
