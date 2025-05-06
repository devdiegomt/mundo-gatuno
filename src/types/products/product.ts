export type ProductProps = {
  _id: {
    $oid: string;
  };
  title: string;
  price: number;
  description: string;
  aroma: string;
  quantity: number;
  image: string;
};
