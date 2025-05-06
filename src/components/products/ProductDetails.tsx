import { Link, useParams } from "react-router-dom";

export const ProductDetails = () => {
  const params = useParams();
  const selectedCard = params.productId;

  return (
    <>
      <Link to="/">Volver</Link>
      <p>{selectedCard}</p>
    </>
  );
};
