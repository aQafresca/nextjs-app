'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/shared/ui/button';

import { SORT_OPTIONS } from '@/entities/sort/model/constants';
import type { TSortOrder } from '@/features/product-list/model';

interface PriceSortProps {
  currentOrder?: TSortOrder;
}

export const PriceSort = ({ currentOrder }: PriceSortProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setSort = (order: TSortOrder | null) => {
    const params = new URLSearchParams(searchParams?.toString() ?? '');

    if (order) {
      params.set('sortBy', 'price');
      params.set('order', order);
    } else {
      params.delete('sortBy');
      params.delete('order');
    }

    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-4 text-sm">
      <span className="text-muted-foreground font-medium text-nowrap">
        Sort by:
      </span>

      <div className="flex items-center gap-2">
        {SORT_OPTIONS.map(({ label, value }) => {
          const isActive = currentOrder === value;

          return (
            <Button
              key={value}
              onClick={() => {
                setSort(value);
              }}
              variant="ghost"
              size="sm"
              className={`transition-colors hover:opacity-80 cursor-pointer ${
                isActive ? 'text-chart-4 font-bold' : 'text-foreground'
              }`}
            >
              {label}
            </Button>
          );
        })}

        {!!currentOrder && (
          <Button
            onClick={() => {
              setSort(null);
            }}
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground hover:text-destructive cursor-pointer"
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};
