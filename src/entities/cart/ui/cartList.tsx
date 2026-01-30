'use client';

import { Checkbox } from '@/shared/ui/checkbox';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';

import {
  type ICartActions,
  type ICartItem,
  type ICartSelectionActions,
} from '@/entities/cart/model';
import { CART_COLUMNS } from '@/entities/cart/model';
import { CartRow } from '@/entities/cart/ui';

interface ICartListProps {
  items: ICartItem[];
  selectedIds: number[];
  isAllSelected: boolean;
  actions: ICartActions;
  selectionActions: ICartSelectionActions;
}

export const CartList = ({
  items,
  selectedIds,
  isAllSelected,
  actions,
  selectionActions,
}: ICartListProps) => {
  const handleSelectAll = (checked: boolean) => {
    if (checked) selectionActions.selectAll();
    else selectionActions.clear();
  };

  return (
    <Table className="max-w-[900px] mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">
            <Checkbox
              checked={isAllSelected}
              onCheckedChange={(value) => {
                handleSelectAll(!!value);
              }}
            />
          </TableHead>
          {CART_COLUMNS.map((col) => (
            <TableHead key={col.key}>{col.title}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <CartRow
            key={item.id}
            item={item}
            isSelected={selectedIds.includes(item.id)}
            onToggle={() => {
              selectionActions.toggle(item.id);
            }}
            actions={actions}
            columns={CART_COLUMNS}
          />
        ))}
      </TableBody>
    </Table>
  );
};
