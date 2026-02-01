export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];

  tags?: string[];
  sku?: string;
  weight?: number;
  dimensions?: IDimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: IReview[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: IMeta;
}

export interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail?: string;
}

export interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IFetchProductsParams {
  limit?: number;
  skip?: number;
  query?: string;
  category?: string;
  sortBy?: string;
  order?: string;
}

export interface IProductCardProps {
  product: IProduct;
  isPriority?: boolean;
}
