import { ProductCard } from "../../components/products/ProductCard";
import { useFilter } from "../../hooks/useFilter";
import { useProducts } from "../../hooks/useProducts";
import classes from "./Home.module.css";

export const Home = () => {
  const { searchText } = useFilter();

  const { products, loading, error } = useProducts();

  const filteredCards = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section>
        <h1 className={classes.title}>Arena disponible</h1>
        <ul className={classes.list}>
          {filteredCards.map((product) => (
            <ProductCard key={product._id} pro={product} />
          ))}
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
