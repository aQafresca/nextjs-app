'use client';

import { useSort } from '@/shared/lib/sort/useSort';
import { Button } from '@/shared/ui/button';

import { SORT_OPTIONS } from '@/entities/sort/model/constants';
import type { ISortParams } from '@/entities/sort-panel/model/types';

export const PriceSort = ({ sortBy, order }: ISortParams) => {
  const isPriceActive = sortBy === 'price';
  const { updateSort } = useSort();

  return (
    <div className="flex items-center gap-4 text-sm">
      <span className="text-muted-foreground font-medium text-nowrap">
        Sort by:
      </span>

      <div className="flex items-center gap-2">
        {SORT_OPTIONS.map(({ label, value }) => {
          const isActive = isPriceActive && order === value;

          return (
            <Button
              key={value}
              onClick={() => {
                updateSort('price', value);
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
      </div>
    </div>
  );
};
