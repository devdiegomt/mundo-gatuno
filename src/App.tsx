import { FilterProvider } from "./context/FilterProvider";
import { Routes } from "./routes";

function App() {
  return (
    <FilterProvider>
      <Routes />
    </FilterProvider>
  );
}

export default App;
