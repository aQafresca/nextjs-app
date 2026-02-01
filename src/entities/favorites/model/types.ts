import type { IProduct } from '@/entities/products/model';

export interface IFavoriteState {
  items: IProduct[];
  hasHydrated: boolean;
  add: (product: IProduct) => void;
  remove: (id: number) => void;
  toggle: (product: IProduct) => void;
  clear: () => void;
  setHasHydrated: (state: boolean) => void;
}
