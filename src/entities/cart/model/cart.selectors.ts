import type { ICartState } from '@/entities/cart/model';
export const selectSelectedItems = (state: ICartState) => {
  return state.items.filter((item) => state.selectedIds.includes(item.id));
};

export const selectCartTotal = (state: ICartState) => {
  const selectedItems = selectSelectedItems(state);
  const totalCents = selectedItems.reduce((acc, item) => {
    return acc + Math.round(item.price * 100) * item.quantity;
  }, 0);

  return (totalCents / 100).toFixed(2);
};

export const selectIsAllSelected = (state: ICartState) =>
  state.items.length > 0 && state.selectedIds.length === state.items.length;
