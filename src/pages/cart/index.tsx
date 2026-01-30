'use client';

import { useShallow } from 'zustand/react/shallow';

import { EmptyState } from '@/shared/ui/empty-state';
import { Loader } from '@/shared/ui/loader';

import { useCartStore } from '@/entities/cart/model';
import {
  selectCartTotal,
  selectIsAllSelected,
  selectSelectedItems,
} from '@/entities/cart/model';
import { CartList } from '@/entities/cart/ui';
import { CartSummary } from '@/entities/cart/ui';

export const CartPage = () => {
  const { items, actions, selectedActions, hasHydrated, selectedIds } =
    useCartStore(
      useShallow((state) => ({
        items: state.items,
        actions: state.actions,
        selectedActions: state.selectedActions,
        hasHydrated: state.hasHydrated,
        selectedIds: state.selectedIds,
      })),
    );

  const selectedItems = useCartStore(useShallow(selectSelectedItems));
  const total = useCartStore(selectCartTotal);
  const isAllSelected = useCartStore(selectIsAllSelected);

  if (!hasHydrated) return <Loader />;

  if (items.length === 0) return <EmptyState message="Cart is empty" />;

  return (
    <div className="flex flex-col gap-2 py-4 relative">
      <h1>Cart</h1>
      <div className="flex gap-4 border border-border rounded-lg p-2">
        <CartList
          items={items}
          selectedIds={selectedIds}
          isAllSelected={isAllSelected}
          selectionActions={selectedActions}
          actions={actions}
        />
        <CartSummary items={selectedItems} total={total} />
      </div>
    </div>
  );
};
