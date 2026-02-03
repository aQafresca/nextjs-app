import { client } from '@/shared/api';
import { ENDPOINTS_URL } from '@/shared/constants';

import type { IApiCategories } from '@/entities/category/model';

export const categoriesService = {
  getAllCategories: async (): Promise<IApiCategories[]> => {
    return client<IApiCategories[]>({
      endpoint: ENDPOINTS_URL.PRODUCTS_CATEGORIES,
      method: 'GET',
    });
  },
};
