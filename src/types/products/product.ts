export namespace Product {
  interface Presentation {
    weight: string;
    price: number;
    quantity: number;
    image?: string;
  }

  export interface Props {
    _id: string;
    title: string;
    description: string;
    aroma: string;
    presentations: Presentation[];
  }

  export interface ContextType {
    products: Props[];
    loading: boolean;
    error: string | null;
  }
}
