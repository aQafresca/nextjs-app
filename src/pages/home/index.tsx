import type { IProductListProps } from '@/features/product-list/model';
import { ProductList } from '@/features/product-list/ui';

export const HomePage = ({ page, pageSize, query }: IProductListProps) => {
  return (
    <div className={'flex-1 flex flex-col'}>
      <ProductList page={page} pageSize={pageSize} query={query} />
    </div>
  );
};
