import type { IProductListPromiseProps } from '@/features/product-list/model';
import { HomePage } from '@/pages/home';

export default async function Home(props: IProductListPromiseProps) {
  const searchParams = await props.searchParams;

  const page = Math.max(1, Number(searchParams.page) || 1);
  const pageSize = Math.max(1, Number(searchParams.pageSize) || 10);
  const query = searchParams.query ?? '';

  return <HomePage page={page} pageSize={pageSize} query={query} />;
}
