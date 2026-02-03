import type {
  IProductListPromiseProps,
  TSortOrder,
} from '@/features/product-list/model';
import { HomePage } from '@/pages/home';

export default async function Home(props: IProductListPromiseProps) {
  const searchParams = await props.searchParams;

  const page = Math.max(1, Number(searchParams.page) || 1);
  const pageSize = Math.max(1, Number(searchParams.pageSize) || 10);
  const query = searchParams.query ?? '';
  const category = searchParams.category ?? '';
  const sortBy = searchParams.sortBy ?? '';
  const rawOrder = searchParams.order;

  const order: TSortOrder | undefined =
    rawOrder === 'asc' || rawOrder === 'desc' ? rawOrder : undefined;

  return (
    <HomePage
      page={page}
      pageSize={pageSize}
      query={query}
      category={category}
      sortBy={sortBy}
      order={order}
    />
  );
}
