import { BreadCrumbs } from '@/entities/bread-crumb/ui';
import { CategoryBar } from '@/entities/category/ui';
import { FilterPanel } from '@/entities/filter-panel/ui';
import { PriceSort } from '@/entities/sort/ui/priceSort';
import type { IProductListProps } from '@/features/product-list/model';
import { ProductList } from '@/features/product-list/ui';

export const HomePage = ({
  page,
  pageSize,
  query,
  category,
  sortBy,
  order,
}: IProductListProps) => {
  return (
    <div className={'flex-1 flex flex-col py-5 gap-5'}>
      <FilterPanel />
      <div className={'flex gap-5'}>
        <CategoryBar />
        <div className={'flex flex-col gap-5'}>
          <BreadCrumbs />
          <PriceSort currentOrder={order} />
          <ProductList
            page={page}
            pageSize={pageSize}
            query={query}
            category={category}
            sortBy={sortBy}
            order={order}
          />
        </div>
      </div>
    </div>
  );
};
