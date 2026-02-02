import type { TSortOrder } from '@/features/product-list/model';

export interface ISortParams {
  sortBy?: string;
  order?: TSortOrder;
}

export interface ISortDropdownProps extends ISortParams {
  field: string;
  label: string;
}
