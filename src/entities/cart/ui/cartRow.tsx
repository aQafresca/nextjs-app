'use client';

import { memo } from 'react';

import { Checkbox } from '@/shared/ui/checkbox';
import { TableCell, TableRow } from '@/shared/ui/table';

import type { ICartColumnProps } from '@/entities/cart/model';
import { type ICartActions, type ICartItem } from '@/entities/cart/model';

interface CartRowProps {
  item: ICartItem;
  isSelected: boolean;
  onToggle: () => void;
  actions: ICartActions;
  columns: ICartColumnProps[];
}

export const CartRow = memo(
  ({ item, isSelected, onToggle, actions, columns }: CartRowProps) => {
    return (
      <TableRow data-state={isSelected ? 'selected' : undefined}>
        <TableCell>
          <Checkbox
            checked={isSelected}
            onCheckedChange={() => {
              onToggle();
            }}
          />
        </TableCell>
        {columns.map((col) => (
          <TableCell key={col.key} className={col.className}>
            {col.render({ item, actions })}
          </TableCell>
        ))}
      </TableRow>
    );
  },
);
CartRow.displayName = 'CartRow';
