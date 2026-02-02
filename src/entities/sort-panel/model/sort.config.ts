export const SORT_FIELDS = {
  title: 'Name',
  brand: 'Brand',
  price: 'Price',
  rating: 'Rating',
} as const;

export const ORDER_OPTIONS = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' },
] as const;

export type TSortField = keyof typeof SORT_FIELDS;
