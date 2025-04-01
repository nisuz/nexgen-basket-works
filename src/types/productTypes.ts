
export interface ProductType {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  options?: {
    color?: string[];
    size?: string[];
  };
}
