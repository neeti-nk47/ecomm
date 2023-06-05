import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Product Details </h1>
      <h1>{params.productId}</h1>
    </div>
  );
};

export default ProductDetail;
