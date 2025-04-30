import { createContext } from "react";
import { FilterContextProps } from "../types/context/filterContext";

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);
