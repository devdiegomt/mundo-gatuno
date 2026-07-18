export interface Presentation {
  weight: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  aroma: string;
  presentations: Presentation[];
}

export type productProps = {
  pro: Product;
};
