import { client } from '@/shared/api';
import { ENDPOINTS_URL } from '@/shared/constants';

import { resolveEndpoint } from '@/entities/products/api';
import type {
  IFetchProductsParams,
  IProduct,
  IProductsResponse,
} from '@/entities/products/model';

export const productsService = {
  getAllProducts: ({ query, skip, limit, category }: IFetchProductsParams) => {
    return client<IProductsResponse>({
      endpoint: resolveEndpoint({ query, category }),
      params: {
        q: query,
        skip,
        limit,
      },
    });
  },
  getProductById: (id: string) => {
    return client<IProduct>({
      endpoint: `${ENDPOINTS_URL.PRODUCTS}/${id}`,
      method: 'GET',
    });
  },
};
