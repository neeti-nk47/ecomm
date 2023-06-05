import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../store/cart-context";
import "./ProductDetail.css";

const productsArr = [
  {
    id: "m1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "m2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "m3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "m4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetail = () => {
  const params = useParams();

  const ctx = useContext(CartContext);

  function getProductById() {
    return productsArr.find((product) => product.id === params.Id);
  }

  const product = getProductById();

  const ProductInfo = {
    key: product.id,
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.imageUrl,
  };

  const AddItemHandler = (e) => {
    ctx.addItem({ ...ProductInfo, quantity: 1 });
  };

  return (
    <div className="container">
      <h1> {product.title} </h1>
      <img src={product.imageUrl} alt={product.id} />
      <h2> {product.price} </h2>
      <button onClick={AddItemHandler}>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
