import type { Product } from "../types/products/product";

/**
 * URL base del backend. Configúrala en un archivo .env:
 *   VITE_API_URL=https://mundo-gatuno-backend.onrender.com
 * Si no existe, usa el valor por defecto (producción en Render).
 */
const API_URL =
  import.meta.env.VITE_API_URL ?? "https://mundo-gatuno-backend.onrender.com";

export const getProducts = async (
  signal?: AbortSignal
): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/api/products`, { signal });

  if (!response.ok) {
    throw new Error(`Error al obtener productos (${response.status})`);
  }

  return response.json();
};
