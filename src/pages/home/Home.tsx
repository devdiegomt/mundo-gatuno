import { ProductCard } from "../../components/products/ProductCard";
import { useFilter } from "../../hooks/useFilter";
import { ProductProps } from "../../types/products/product";
import { useState, useEffect } from "react";
import classes from "./Home.module.css";

export const Home = () => {
  const { searchText } = useFilter();

  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://mundo-gatuno-backend.onrender.com/api/products"
        );
        if (!response.ok) {
          throw new Error("No se pudieron obtener los productos.");
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener los productos", error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredCards = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (isLoading) {
    return <p>Cargando...</p>;
  }

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
