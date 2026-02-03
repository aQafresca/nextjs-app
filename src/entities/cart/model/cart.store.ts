'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { LocalStorageKeys } from '@/shared/constants';

import type {
  ICartActions,
  ICartSelectionActions,
  ICartState,
} from '@/entities/cart/model';

export const useCartStore = create<ICartState>()(
  persist(
    (set) => {
      const actions: ICartActions = {
        increment: (id) =>
          set((state) => ({
            items: state.items.map((el) =>
              el.id === id ? { ...el, quantity: el.quantity + 1 } : el,
            ),
          })),
        decrement: (id) =>
          set((state) => ({
            items: state.items
              .map((el) =>
                el.id === id ? { ...el, quantity: el.quantity - 1 } : el,
              )
              .filter((el) => el.quantity > 0),
          })),
        remove: (id) =>
          set((state) => ({
            items: state.items.filter((el) => el.id !== id),
            selectedIds: state.selectedIds.filter((elId) => elId !== id),
          })),
      };

      const selectedActions: ICartSelectionActions = {
        select: (id) =>
          set((state) => ({
            selectedIds: state.selectedIds.includes(id)
              ? state.selectedIds
              : [...state.selectedIds, id],
          })),
        deselect: (id) =>
          set((state) => ({
            selectedIds: state.selectedIds.filter((elId) => elId !== id),
          })),
        toggle: (id) =>
          set((state) => ({
            selectedIds: state.selectedIds.includes(id)
              ? state.selectedIds.filter((elId) => elId !== id)
              : [...state.selectedIds, id],
          })),
        selectAll: () =>
          set((state) => ({
            selectedIds: state.items.map((el) => el.id),
          })),
        clear: () => set({ selectedIds: [] }),
      };

      return {
        items: [],
        selectedIds: [],
        hasHydrated: false,
        add: (item) =>
          set((state) =>
            state.items.some((el) => el.id === item.id)
              ? state
              : { items: [...state.items, { ...item, quantity: 1 }] },
          ),
        clear: () => set({ items: [], selectedIds: [] }),
        actions,
        selectedActions,
      };
    },
    {
      name: LocalStorageKeys.CART,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        selectedIds: state.selectedIds,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) state.hasHydrated = true;
      },
    },
  ),
);
