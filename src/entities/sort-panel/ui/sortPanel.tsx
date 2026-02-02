import { PriceSort } from '@/entities/sort/ui';
import type { ISortParams } from '@/entities/sort-panel/model';
import { SORT_FIELDS, type TSortField } from '@/entities/sort-panel/model';
import { SortSelect } from '@/entities/sort-panel/ui/sortSelect';

export const SortPanel = ({ sortBy, order }: ISortParams) => {
  return (
    <div className={'flex flex-col gap-3'}>
      <div className={'hidden md:flex gap-3'}>
        {Object.entries(SORT_FIELDS).map(([field, value]) => (
          <SortSelect
            key={field}
            field={field as TSortField}
            label={value}
            sortBy={sortBy}
            order={order}
          />
        ))}
      </div>
      <PriceSort sortBy={sortBy} order={order} />
    </div>
  );
};
