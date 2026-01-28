import type { TNavCategoriesGroup } from '@/shared/config';
import { NAV_CATEGORIES } from '@/shared/config';

import type { IApiCategories } from '@/entities/category/model/types';

interface ICategoryNavigation {
  apiCategories: IApiCategories[];
}

export const buildCategoryNavigation = ({
  apiCategories,
}: ICategoryNavigation): TNavCategoriesGroup[] => {
  const availableSlugs = new Set(apiCategories.map((cat) => cat.slug));

  return NAV_CATEGORIES.map((section) => {
    if ('groups' in section) {
      return {
        ...section,
        groups: section.groups
          .map((group) => ({
            ...group,
            items: group.items.filter((item) => availableSlugs.has(item.slug)),
          }))
          .filter((group) => group.items.length > 0),
      };
    }

    return {
      ...section,
      items: section.items.filter((item) => availableSlugs.has(item.slug)),
    };
  }).filter((section) => {
    if ('groups' in section) {
      return section.groups.length > 0;
    }

    return section.items.length > 0;
  });
};
