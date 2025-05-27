export type ProductCategory =
  | 'Electronics'
  | 'Fashion'
  | 'Books'
  | 'Home & Kitchen'
  | 'Sports'
  | 'Beauty'
  | 'Toys'
  | 'Automotive'
  | 'Health'
  | 'Garden'

export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: ProductCategory;
  rating: number;
  stock: number;
  brand?: string;
  features?: string[];
  discount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  originalPrice?: number;
  reviewsCount?: number;
  sku?: string;
  specifications?: Record<string, string>;
  variants?: {
    type: string;
    options: { name: string; value: string; stock?: number; image?: string }[];
  }[];
} 