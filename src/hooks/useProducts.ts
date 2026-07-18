import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import type { Product } from "../types/products/product";

/** Tras este tiempo cargando, asumimos que Render está despertando el servidor. */
const SLOW_SERVER_MS = 4000;

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [slowServer, setSlowServer] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const slowTimer = setTimeout(() => setSlowServer(true), SLOW_SERVER_MS);

    getProducts(controller.signal)
      .then((data) => setProducts(data))
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(
          err instanceof Error ? err.message : "Ocurrió un error inesperado"
        );
      })
      .finally(() => {
        clearTimeout(slowTimer);
        setLoading(false);
        setSlowServer(false);
      });

    return () => {
      clearTimeout(slowTimer);
      controller.abort();
    };
  }, []);

  return { products, loading, slowServer, error };
};
