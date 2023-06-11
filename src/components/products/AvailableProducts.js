import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import ProductItem from "./ProductItem";

import "./AvailableProducts.css";

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
function AvailableProducts() {
  const ctx = useContext(CartContext);

  const producst = productsArr.map((item) => (
    <Card className="card" key={item.id}>
      <Link to={item.id}>
        <ProductItem
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.imageUrl}
        />
      </Link>
      <Button
        onClick={(e) => {
          const ProductInfo = {
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.imageUrl,
          };
          ctx.addItem({ ...ProductInfo, quantity: 1 });
        }}
      >
        Add to cart
      </Button>
    </Card>
  ));

  return (
    <div className="store">
      <div className="productContainer">{producst}</div>
    </div>
  );
}

export default AvailableProducts;
