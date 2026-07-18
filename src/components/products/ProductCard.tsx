import { useState } from "react";
import { productProps } from "../../types/products/product";
import classes from "./ProductCard.module.css";

const INSTAGRAM_URL = "https://www.instagram.com/mundogatunozipa/";

function formatToCOP(number: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(number);
}

export const ProductCard: React.FC<productProps> = ({
  pro: { title, description, aroma, presentations },
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = presentations[selectedIndex] ?? presentations[0];

  if (!selected) return null;

  const outOfStock = selected.quantity <= 0;

  return (
    <li className={classes.card}>
      {selected.image && (
        <div className={classes["image-container"]}>
          <img
            src={selected.image}
            alt={`${title} - ${selected.weight}`}
            className={classes.image}
            loading="lazy"
          />
        </div>
      )}
      <div className={classes.info}>
        <h2 className={classes.name}>{title}</h2>
        <p className={classes.description}>{description}</p>
        <p className={classes.aroma}>Aroma: {aroma}</p>

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

        <p className={classes.price}>
          {formatToCOP(selected.price)}
          {presentations.length === 1 && (
            <span className={classes["single-weight"]}> · {selected.weight}</span>
          )}
        </p>

        {outOfStock ? (
          <p className={classes.soldout}>Agotado</p>
        ) : (
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            className={classes.order}
          >
            Pedir por Instagram
          </a>
        )}
      </div>
    </li>
  );
};
