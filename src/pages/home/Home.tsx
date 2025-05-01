import { ProductCard } from "../../components/products/ProductCard";
import { PRODUCTS } from "../../mocks/products";
import { useFilter } from "../../context/useFilter";
import classes from "./Home.module.css";

export const Home = () => {
  const { searchText } = useFilter();

  const filteredCards = PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <section>
        <h1 className={classes.title}>Arena disponible</h1>
        <ul className={classes.list}>
          {filteredCards.map((product) => (
            <ProductCard key={product.id} pro={product} />
          ))}
        </ul>
      </section>
    </>
  );
};
