import { Link } from "react-router-dom";
import { Product } from "../../types/products/product";
import classes from "./ProductCard.module.css";
import { formatToCOP } from "../../utils/formatToCop";

export const ProductCard: React.FC<{ pro: Product.Props }> = ({
  pro: { _id, title, price, description, aroma, image, quantity },
}) => {
  return (
    <li className={classes.card}>
      {image && (
        <div className={classes["card__image-container"]}>
          <img
            src={image}
            alt={title}
            className={classes["card__image-container--img"]}
          />
        </div>
      )}
      <div className={classes["card__info"]}>
        <h3>{title}</h3>
        <p>
          <b>{formatToCOP(price)}</b>
          <br />
          {description}
          <br />
          En stock: <b>{quantity}</b>
          <br />
          {aroma}
        </p>
        <Link to={`/${_id}`} type="button" className={classes["card__button"]}>
          Ver Detalles
        </Link>
      </div>
    </li>
  );
};
