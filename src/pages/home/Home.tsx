import { ProductCard } from "../../components/products/ProductCard";
import { useFilter } from "../../hooks/useFilter";
import { useProducts } from "../../hooks/useProducts";
import classes from "./Home.module.css";

export const HomePage = () => {
  const { searchText } = useFilter();

  const { products, loading, error } = useProducts();

  const filteredCards = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  if (loading)
    return (
      <div className={classes.loader}>
        <div className={classes["loader__spinner"]} />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <section>
        <h1 className={classes.title}>Arena disponible</h1>
        <ul className={classes.list}>
          {filteredCards.map((product) =>
            product.presentations.map((presentation, i) => (
              <ProductCard
                key={`${product._id}-${i}`}
                pro={product}
                pre={presentation}
              />
            ))
          )}
        </ul>
        {filteredCards.length === 0 && (
          <p className={classes.empty}>
            Ningun producto coincide con tu búsqueda.
          </p>
        )}
      </section>
    </>
  );
};
