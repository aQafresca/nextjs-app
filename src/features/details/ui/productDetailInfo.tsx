import Image from 'next/image';

import { calculateDiscountedPrice } from '@/shared/lib/utils/calculateDiscountedPrice';

import { mapProductToCartItem } from '@/entities/cart/model';
import { productsService } from '@/entities/products/api';
import { AddToCart, PriceDisplay } from '@/entities/products/ui';
import type { IDetailsProductId } from '@/features/details/model';
import { ProductReviews } from '@/features/details/ui';

export const ProductDetailInfo = async ({ productId }: IDetailsProductId) => {
  const data = await productsService.getProductById(productId);

  const {
    price,
    title,
    images,
    discountPercentage,
    stock,
    description,
    brand,
    reviews,
  } = data;

  const finalPrice = calculateDiscountedPrice(price, discountPercentage);
  const hasDiscount = discountPercentage > 0;
  const cartItemDto = mapProductToCartItem(data, finalPrice);

  return (
    <div className={'flex flex-col gap-5 py-5'}>
      <div className="flex flex-col gap-6 items-center sm:flex-row sm:items-center">
        <div className={'flex flex-col items-center justify-between w-ful'}>
          <Image
            className={'w-75'}
            src={images[0]}
            alt={title}
            loading={'lazy'}
            width={300}
            height={250}
          />
        </div>
        <ul className={'flex flex-col gap-3'}>
          <li className={'flex gap-3'}>
            <span>stock</span>
            <span className={'text-gray-400'}>{stock}</span>
          </li>
          <li>
            <p className={'rounded bg-gray-light p-2'}>{description}</p>
          </li>
          <li className={'flex items-center gap-3'}>
            <h4>{brand}</h4>
            <PriceDisplay
              price={price}
              finalPrice={finalPrice}
              hasDiscount={hasDiscount}
            />
          </li>
          <AddToCart cartItem={cartItemDto} />
        </ul>
      </div>
      <ProductReviews reviews={reviews} />
    </div>
  );
};
