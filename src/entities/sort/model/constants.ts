import type { TSortOrder } from '@/features/product-list/model';

export const SORT_OPTIONS: { label: string; value: TSortOrder }[] = [
  { label: 'Ascending price', value: 'asc' },
  { label: 'Descending price', value: 'desc' },
];
