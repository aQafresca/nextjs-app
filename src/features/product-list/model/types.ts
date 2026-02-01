export type TSortOrder = 'asc' | 'desc';

export interface IProductListPromiseProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    page?: string;
    pageSize?: string;
    query?: string;
    category?: string;
    sortBy?: string;
    order?: TSortOrder;
  }>;
}

export interface IProductListProps {
  page: number;
  pageSize: number;
  query?: string;
  category?: string;
  sortBy?: string;
  order?: TSortOrder;
}
