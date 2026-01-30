import type React from 'react';

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export interface ICartActions {
  increment(id: number): void;
  decrement(id: number): void;
  remove(id: number): void;
}

export interface ICartSelectionActions {
  select(id: number): void;
  deselect(id: number): void;
  toggle(id: number): void;
  selectAll(): void;
  clear(): void;
}

export interface ICartState {
  items: ICartItem[];
  add(item: ICartItem): void;
  clear(): void;
  selectedIds: number[];
  selectedActions: ICartSelectionActions;
  actions: ICartActions;
  hasHydrated: boolean;
}

export interface IRenderProps {
  item: ICartItem;
  actions: ICartActions;
}

export type CartColumnKey =
  | 'IMAGE'
  | 'TITLE'
  | 'QUANTITY'
  | 'PRICE'
  | 'TOTAL'
  | 'DELETE';

export interface ICartColumnProps {
  key: CartColumnKey;
  title: string;
  className?: string;
  render: (props: IRenderProps) => React.ReactNode;
}
