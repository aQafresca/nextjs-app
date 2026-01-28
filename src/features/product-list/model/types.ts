export interface IProductListPromiseProps {
  searchParams: Promise<{
    page?: string;
    pageSize?: string;
    query?: string;
    category?: string;
  }>;
}

export interface IProductListProps {
  page: number;
  pageSize: number;
  query?: string;
  category?: string;
}
