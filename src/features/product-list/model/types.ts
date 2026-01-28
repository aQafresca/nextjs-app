export interface IProductListPromiseProps {
  searchParams: Promise<{ page?: string; pageSize?: string; query?: string }>;
}

export interface IProductListProps {
  page: number;
  pageSize: number;
  query?: string;
}
