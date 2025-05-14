import { Link } from "react-router-dom";
import { Product } from "../../types/products/product";
import classes from "./ProductCard.module.css";
import { formatToCOP } from "../../utils/formatToCop";

export const ProductCard: React.FC<{
  pro: Product.Props;
  pre: Product.Presentation;
}> = ({ pro: { _id, title, description, aroma }, pre }) => {
  const updatedTitle = title.split(" ").slice(0, 2).join(" ");
  const type = title.split(" ")[0] === "Snack" ? "sabor" : "aroma";

  return (
    <li className={classes.card}>
      {pre.image && (
        <div className={classes["card__image-container"]}>
          <img
            src={pre.image}
            alt={title}
            className={classes["card__image-container--img"]}
          />
        </div>
      )}

      <div className={classes["card__info"]}>
        <h2>
          {updatedTitle} con {type} a {aroma}
        </h2>
        <h3 className={classes["card__price"]}>
          {formatToCOP(pre.price)}
        </h3>
        <p>
          {description}
          <br />
          {/* En stock: <b>{presentations[0].quantity}</b>
          <br /> */}
          Peso: <b>{pre.weight}</b>
          <br />
        </p>
        <Link
          to={`/${_id}/${pre.weight}`}
          type="button"
          className={classes["card__button"]}
        >
          Ver Detalles
        </Link>
      </div>
    </li>
  );
};
