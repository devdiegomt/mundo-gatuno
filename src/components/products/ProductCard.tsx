import { productProps } from "../../types/products/product";
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
  pro: { title, price, description, aroma, image, quantity },
}) => {
  return (
    <li className={classes.card}>
      {image && (
        <div className={classes["image-container"]}>
          <img src={image} alt={title} className={classes.image} />
        </div>
      )}
      <div className={classes.info}>
        <h3>{title}</h3>
        <p>{formatToCOP(price)}</p>
        <p>{description}</p>
        <p>
          En stock: <b>{quantity}</b>
        </p>
        <p>{aroma}</p>
      </div>
    </li>
  );
};
