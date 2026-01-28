import { EmptyState } from '@/shared/ui/empty-state';
import { PaginationWithLinks } from '@/shared/ui/pagination-with-links';

import { productsService } from '@/entities/products/api';
import { ProductCard } from '@/entities/products/ui';
import type { IProductListProps } from '@/features/product-list/model';

export const ProductList = async ({
  page,
  pageSize,
  query,
}: IProductListProps) => {
  const skip = (page - 1) * pageSize;

  const data = await productsService.getAllProducts({
    skip,
    limit: pageSize,
    query,
  });
  const { total, products } = data;

  const totalPages = Math.ceil(total / pageSize);

  const isTotalEmpty = total === 0;
  const isOutOfRange = page > totalPages && total > 0;

  return (
    <div
      className={
        'flex-1 flex flex-col items-center justify-between gap-6 mx-auto w-full py-6'
      }
    >
      {isOutOfRange ? <EmptyState message={'No products found'} /> : null}

      {!isTotalEmpty && !isOutOfRange && (
        <>
          <div className={'flex flex-wrap justify-center gap-5 w-full'}>
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                isPriority={index === 0}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <PaginationWithLinks
              page={page}
              pageSize={pageSize}
              totalCount={total}
              navigationMode="router"
            />
          )}
        </>
      )}
    </div>
  );
};
