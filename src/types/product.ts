export interface Product {
  id: string;
  name: string;
  nameGe: string;
  description: string;
  descriptionGe: string;
  compatible: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
