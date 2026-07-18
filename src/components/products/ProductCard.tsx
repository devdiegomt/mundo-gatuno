import { useState } from "react";
import type { productProps } from "../../types/products/product";
import classes from "./ProductCard.module.css";

function formatToCOP(number: number) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return formatter.format(number);
}

export const ProductCard: React.FC<productProps> = ({
  pro: { title, description, aroma, presentations },
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = presentations[selectedIndex] ?? presentations[0];

  if (!selected) return null;

  return (
    <li className={classes.card}>
      {selected.image && (
        <div className={classes["image-container"]}>
          <img
            src={selected.image}
            alt={`${title} - ${selected.weight}`}
            className={classes.image}
          />
        </div>
      )}
      <div className={classes.info}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Aroma: {aroma}</p>

        {presentations.length > 1 && (
          <div
            className={classes.weights}
            role="group"
            aria-label="Elige una presentación"
          >
            {presentations.map((presentation, i) => (
              <button
                key={presentation.weight}
                type="button"
                onClick={() => setSelectedIndex(i)}
                className={
                  i === selectedIndex
                    ? `${classes.weight} ${classes["weight--selected"]}`
                    : classes.weight
                }
              >
                {presentation.weight}
              </button>
            ))}
          </div>
        )}

        <p className={classes.price}>{formatToCOP(selected.price)}</p>
        <p>
          {selected.quantity > 0 ? (
            <>
              En stock: <b>{selected.quantity}</b>
            </>
          ) : (
            <b>Agotado</b>
          )}
        </p>
      </div>
    </li>
  );
};
