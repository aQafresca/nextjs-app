import { CategoryBar } from '@/entities/category/ui';
import type { IProductListProps } from '@/features/product-list/model';
import { ProductList } from '@/features/product-list/ui';

export const HomePage = ({
  page,
  pageSize,
  query,
  category,
}: IProductListProps) => {
  return (
    <div className={'flex-1 flex flex-col'}>
      <div className={'flex gap-5'}>
        <CategoryBar />
        <ProductList
          page={page}
          pageSize={pageSize}
          query={query}
          category={category}
        />
      </div>
    </div>
  );
};
