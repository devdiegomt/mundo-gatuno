import { createContext } from "react";
import { Product } from "../types/products/product";

export const ProductContext = createContext<Product.ContextType>({
  products: [],
  loading: false,
  error: null,
});
