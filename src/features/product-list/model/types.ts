export interface IProductListPromiseProps {
  searchParams: Promise<{ page?: string; pageSize?: string }>;
}

export interface IProductListProps {
  page: number;
  pageSize: number;
}
