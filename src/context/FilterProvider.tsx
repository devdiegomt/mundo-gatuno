import { useState } from "react";
import { FilterContext } from "./FilterContext";

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <FilterContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </FilterContext.Provider>
  );
};
