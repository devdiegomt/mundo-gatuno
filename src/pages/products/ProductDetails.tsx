import { Link, useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";
import { useProducts } from "../../hooks/useProducts";
import { formatToCOP } from "../../utils/formatToCop";
import backArrow from "../../assets/icons/backArrow.png";
import whatsappIcon from "../../assets/social/whatsapp.png";

export const ProductDetailsPage = () => {
  const params = useParams();
  const selectedCard = params.productId;
  const { products } = useProducts();
  const productDetails = products.find(
    (product) => product._id === selectedCard
  );
  const { title, description, price, image, aroma, quantity } =
    productDetails || {
      title: "No se encontró el producto",
      description: "",
      price: 0,
      image: "",
      aroma: "",
      quantity: 0,
    };

  return (
    <>
      <div className={classes["back-arrow"]}>
        <Link to="/">
          <img src={backArrow} alt="Back Arrow" /> Volver
        </Link>
      </div>
      <div className={classes["product-details-container"]}>
        {productDetails ? (
          <div className={classes["product-details"]}>
            {image && (
              <div className={classes["product-details__image-container"]}>
                <img
                  src={image}
                  alt={title}
                  className={classes["product-details__image-container--img"]}
                />
              </div>
            )}
            <div className={classes["product-details__info"]}>
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
              <div className={classes["product-details__button"]}>
                <Link
                  to={`https://wa.me/573112095231?text=Hola%2C%20estoy%20interesado%2Fa%20en%20el%20producto%20${title}%20con%20aroma%20a%20${aroma}%20por%20${formatToCOP(
                    price
                  )}.%20%C2%BFA%C3%BAn%20lo%20tienes%20disponible%3F
              `}
                  type="button"
                >
                  <p>Comprar</p>
                  <img src={whatsappIcon} alt="Whatsapp Logo" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes["product-details__not-found"]}>
            <p>No se encontró el producto</p>
          </div>
        )}
      </div>
    </>
  );
};
