import { Link, NavLink, useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";
import { useProducts } from "../../hooks/useProducts";
import { formatToCOP } from "../../utils/formatToCop";
import backArrow from "../../assets/icons/backArrow.png";
import whatsappIcon from "../../assets/social/whatsapp.png";
import { SelectedWeight } from "./SelectedWeight";

export const ProductDetailsPage = () => {
  const params = useParams();
  const selectedCard = params.productId;
  const { products } = useProducts();
  const productDetails = products.find(
    (product) => product._id === selectedCard
  );

  if (!productDetails) {
    return (
      <div className={classes["product-details__not-found"]}>
        {/* Clase pendiente */}
        <p>No se encontró el producto</p>
      </div>
    );
  }

  const { title, description, aroma, presentations } = productDetails;

  const selectedWeight = params.selectedWeight;

  const selectedPresentation = presentations.find(
    (pre) => pre.weight === selectedWeight
  );

  if (!selectedPresentation) {
    return (
      <div className={classes["product-details__not-found"]}>
        {/* clases pendientes */}
        <p>No se encontró el producto con el peso seleccionado</p>
      </div>
    );
  }

  return (
    <SelectedWeight>
      <div className={classes["back-arrow"]}>
        <Link to="/">
          <img src={backArrow} alt="Back Arrow" /> Volver
        </Link>
      </div>
      <div className={classes["product-details-container"]}>
        {productDetails ? (
          <div className={classes["product-details"]}>
            {selectedPresentation.image && (
              <div className={classes["product-details__image-container"]}>
                <img
                  src={selectedPresentation.image}
                  alt={title}
                  className={classes["product-details__image-container--img"]}
                />
              </div>
            )}
            <div className={classes["product-details__info"]}>
              <h3>{title}</h3>
              <p>
                <b>{formatToCOP(selectedPresentation.price)}</b>
                <br />
                {description}
                <br />
                {selectedWeight === "4.5kg" ? (
                  <span>
                    En stock: <b>10</b>
                  </span>
                ) : (
                  <span>
                    En stock: <b>{selectedPresentation.quantity}</b>
                  </span>
                )}
                <br />
                {aroma}
                <br />
                <br />
                <b>Pesos disponibles:</b>
                <br />
              </p>
              <ul className={classes["product-details__info--weights"]}>
                {presentations.map((pre, index) => (
                  <li key={index}>
                    <NavLink
                      to={pre.weight}
                      className={({ isActive }) =>
                        isActive ? classes.active : ""
                      }
                    >
                      {pre.weight}
                      <br />
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className={classes["product-details__button"]}>
                <Link
                  to={`https://wa.me/573112095231?text=Hola%2C%20estoy%20interesado%2Fa%20en%20el%20producto%20${title}%20con%20aroma%20a%20${aroma}%20y%20peso%20${selectedWeight}%20por%20${formatToCOP(
                    selectedPresentation.price
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
    </SelectedWeight>
  );
};
