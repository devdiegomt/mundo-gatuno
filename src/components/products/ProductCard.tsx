import { Link } from "react-router-dom";
import { Product } from "../../types/products/product";
import classes from "./ProductCard.module.css";
import { formatToCOP } from "../../utils/formatToCop";

export const ProductCard: React.FC<{ pro: Product.Props }> = ({
  pro: { _id, title, presentations, description },
}) => {
  const updatedTitle = title.split(" ").slice(0, 2).join(" ");

  return (
    <li className={classes.card}>
      {presentations[0].image && (
        <div className={classes["card__image-container"]}>
          <img
            src={presentations[0].image}
            alt={title}
            className={classes["card__image-container--img"]}
          />
        </div>
      )}

      <div className={classes["card__info"]}>
        <h2>{updatedTitle}</h2>
        <h3 className={classes["card__price"]}>
          {formatToCOP(presentations[0].price)}
        </h3>
        <p>
          {description}
          <br />
          En stock: <b>{presentations[0].quantity}</b>
          <br />
          Peso: <b>{presentations[0].weight}</b>
          <br />
        </p>
        <Link to={`/${_id}/${presentations[0].weight}`} type="button" className={classes["card__button"]}>
          Ver Detalles
        </Link>
      </div>
    </li>
  );
};
