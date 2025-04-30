import { useContext } from "react";
import { FilterContextProps } from "../types/context/filterContext";
import { FilterContext } from "./FilterContext";

export const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter debe usarse dentro de un FilterProvider");
  }

  return context;
};
