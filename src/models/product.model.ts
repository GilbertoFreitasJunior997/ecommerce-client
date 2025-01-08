import type { ProductImage } from "./product-image.model";

export type Product = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  description: string | null;
  price: string;
  stock: number | null;
  sku: string | null;
  isDeleted: boolean;
  images: ProductImage[];
};
