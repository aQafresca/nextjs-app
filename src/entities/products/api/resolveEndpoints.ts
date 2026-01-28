import { ENDPOINTS_URL } from '@/shared/constants';

import type { IProductListProps } from '@/features/product-list/model';

type TResolveArgs = Pick<IProductListProps, 'query' | 'category'>;

export const resolveEndpoint = ({ query, category }: TResolveArgs) => {
  if (category) return `${ENDPOINTS_URL.PRODUCTS_CATEGORY}/${category}`;

  if (query) return ENDPOINTS_URL.PRODUCTS_SEARCH;

  return ENDPOINTS_URL.PRODUCTS;
};
