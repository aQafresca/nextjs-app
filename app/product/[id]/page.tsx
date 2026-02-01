import type { IProductListPromiseProps } from '@/features/product-list/model';
import { DetailPage } from '@/pages/detail';

export default async function Detail({ params }: IProductListPromiseProps) {
  const { id } = await params;

  return <DetailPage productId={id} />;
}
