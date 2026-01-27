import { client } from '@/shared/api';
import { ENDPOINTS_URL } from '@/shared/constants';

import type {
  IFetchProductsParams,
  IProductsResponse,
} from '@/entities/products/model';

export const productsService = {
  getAllProducts: ({ query, skip, limit }: IFetchProductsParams) => {
    const endpoint = query
      ? ENDPOINTS_URL.PRODUCTS_SEARCH
      : ENDPOINTS_URL.PRODUCTS;

    return client<IProductsResponse>({
      endpoint,
      params: {
        query,
        skip,
        limit,
      },
    });
  },
};
