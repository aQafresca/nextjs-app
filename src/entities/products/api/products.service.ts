import { client } from '@/shared/api';

import { resolveEndpoint } from '@/entities/products/api';
import type {
  IFetchProductsParams,
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
};
