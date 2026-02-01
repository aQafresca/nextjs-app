import type { ICartItem } from '@/entities/cart/model/types';
import type { IProduct } from '@/entities/products/model';

export const mapProductToCartItem = (
  product: IProduct,
  finalPrice: number,
): ICartItem => {
  return {
    id: product.id,
    title: product.title,
    price: finalPrice,
    quantity: 1,
    thumbnail: product.images[0] || product.thumbnail,
  };
};
