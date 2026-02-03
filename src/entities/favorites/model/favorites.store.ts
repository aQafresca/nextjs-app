'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { LocalStorageKeys } from '@/shared/constants';

import type { IFavoriteState } from '@/entities/favorites/model';

export const useFavoriteStore = create<IFavoriteState>()(
  persist(
    (set, get) => ({
      items: [],
      hasHydrated: false,

      add: (product) => {
        const { items } = get();

        if (!items.some((item) => item.id === product.id)) {
          set({ items: [...items, product] });
        }
      },

      remove: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      toggle: (product) => {
        const { items, add, remove } = get();
        const isExist = items.some((item) => item.id === product.id);

        if (isExist) {
          remove(product.id);
        } else {
          add(product);
        }
      },

      clear: () => set({ items: [] }),

      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: LocalStorageKeys.FAVORITES,
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) state.setHasHydrated(true);
      },
    },
  ),
);
