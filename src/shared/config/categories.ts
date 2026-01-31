export interface INavCategoriesItem {
  label: string;
  slug: string;
}

export type TNavCategoriesGroup =
  | {
      label: string;
      items: INavCategoriesItem[];
    }
  | {
      label: string;
      groups: {
        label: string;
        items: INavCategoriesItem[];
      }[];
    };

export const NAV_CATEGORIES: TNavCategoriesGroup[] = [
  {
    label: 'Men',
    items: [
      { label: 'Shirts', slug: 'mens-shirts' },
      { label: 'Shoes', slug: 'mens-shoes' },
      { label: 'Watches', slug: 'mens-watches' },
    ],
  },
  {
    label: 'Women',
    items: [
      { label: 'Dresses', slug: 'womens-dresses' },
      { label: 'Shoes', slug: 'womens-shoes' },
      { label: 'Watches', slug: 'womens-watches' },
      { label: 'Bags', slug: 'womens-bags' },
      { label: 'Jewellery', slug: 'womens-jewellery' },
    ],
  },

  {
    label: 'Beauty & Care',
    items: [
      { label: 'Beauty', slug: 'beauty' },
      { label: 'Skin Care', slug: 'skin-care' },
      { label: 'Fragrances', slug: 'fragrances' },
    ],
  },
  {
    label: 'Electronics',
    items: [
      { label: 'Smartphones', slug: 'smartphones' },
      { label: 'Tablets', slug: 'tablets' },
      { label: 'Laptops', slug: 'laptops' },
      { label: 'Mobile Accessories', slug: 'mobile-accessories' },
    ],
  },
  {
    label: 'Home & Living',
    items: [
      { label: 'Furniture', slug: 'furniture' },
      { label: 'Home Decoration', slug: 'home-decoration' },
      { label: 'Kitchen Accessories', slug: 'kitchen-accessories' },
    ],
  },
  {
    label: 'Lifestyle & Outdoor',
    items: [
      { label: 'Sports Accessories', slug: 'sports-accessories' },
      { label: 'Motorcycle', slug: 'motorcycle' },
      { label: 'Vehicle', slug: 'vehicle' },
    ],
  },
  {
    label: 'Groceries',
    items: [{ label: 'Groceries', slug: 'groceries' }],
  },
  {
    label: 'Other',
    items: [
      { label: 'Tops', slug: 'tops' },
      { label: 'Sunglasses', slug: 'sunglasses' },
    ],
  },
];
