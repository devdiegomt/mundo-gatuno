import { FilterProvider } from "./context/FilterProvider";
import { ProductProvider } from "./context/ProductProvider";
import { Routes } from "./routes";

function App() {
  return (
    <ProductProvider>
      <FilterProvider>
        <Routes />
      </FilterProvider>
    </ProductProvider>
  );
}

export default App;
