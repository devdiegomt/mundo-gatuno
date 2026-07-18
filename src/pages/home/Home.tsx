import { ProductCard } from "../../components/products/ProductCard";
import { useFilter } from "../../hooks/useFilter";
import { useProducts } from "../../hooks/useProducts";
import classes from "./Home.module.css";

export const Home = () => {
  const { searchText } = useFilter();
  const { products, loading, slowServer, error } = useProducts();

  const search = searchText.toLowerCase();
  const filteredCards = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search) ||
      product.aroma.toLowerCase().includes(search)
  );

  return (
    <>
      <section className={classes.hero}>
        <div className={classes.hero__badge}>
          <h1 className={classes.hero__title}>
            Arena de calabaza que a tu gato le encanta
          </h1>
          <p className={classes.hero__subtitle}>
            🐾 Entregas en Zipaquirá · pide por Instagram
          </p>
        </div>
      </section>

      <section className={classes.catalog}>
        <h2 className={classes.title}>Arena disponible</h2>

        {loading && (
          <p className={classes.empty}>
            {slowServer
              ? "El servidor está despertando, esto puede tardar unos segundos…"
              : "Cargando productos…"}
          </p>
        )}

        {error && !loading && (
          <p className={classes.empty}>
            No pudimos cargar los productos. Intenta de nuevo en unos minutos.
          </p>
        )}

        {!loading && !error && (
          <>
            <ul className={classes.list}>
              {filteredCards.map((product) => (
                <ProductCard key={product._id} pro={product} />
              ))}
            </ul>
            {filteredCards.length === 0 && (
              <p className={classes.empty}>
                Ningún producto coincide con tu búsqueda.
              </p>
            )}
          </>
        )}
      </section>
    </>
  );
};
