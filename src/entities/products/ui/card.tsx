import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';
import { calculateDiscountedPrice } from '@/shared/lib/utils/calculateDiscountedPrice';

import { mapProductToCartItem } from '@/entities/cart/model';
import type { IProductCardProps } from '@/entities/products/model';
import { PriceDisplay } from '@/entities/products/ui';
import { AddToCart } from '@/entities/products/ui';
import { ToggleAddToFavorite } from '@/entities/products/ui';

export const ProductCard = ({ product, isPriority }: IProductCardProps) => {
  const { id, price, title, discountPercentage, images } = product;
  const finalPrice = calculateDiscountedPrice(price, discountPercentage);
  const hasDiscount = discountPercentage > 0;

  const cartItemDto = mapProductToCartItem(product, finalPrice);

  return (
    <Link
      className={
        'flex flex-col relative w-60 h-93 border border-border rounded-md transition-transform duration-200 hover:scale-105 shadow-md'
      }
      href={`${ROUTES.DETAIL}/${String(id)}`}
    >
      <Image
        src={images[0]}
        alt={title}
        width={300}
        height={280}
        fetchPriority={isPriority ? 'high' : 'auto'}
        loading={isPriority ? 'eager' : 'lazy'}
        className="w-60 h-67.5 object-cover"
      />
      <ToggleAddToFavorite product={product} />
      <ul className={'flex flex-col gap-3 p-3'}>
        <li>
          <h3 className={'text-center'}>{title}</h3>
        </li>
        <li className={'flex items-center justify-between gap-2 text-lg'}>
          <PriceDisplay
            price={price}
            hasDiscount={hasDiscount}
            finalPrice={finalPrice}
          />
          <AddToCart cartItem={cartItemDto} />
        </li>
      </ul>
    </Link>
  );
};
