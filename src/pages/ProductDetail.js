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
    <>
      <div className="container row box mt-4 p-5 ">
        <div className="col-5">
          <img src={product.imageUrl} alt={product.id} className="card zoom" />
        </div>
        <div className="col">
          <p className="mt-2 h1 "> {product.title} </p>
          <p className="mt-2 h3 mb-3"> Price : ${product.price} </p>
          <button
            onClick={AddItemHandler}
            className="btn btn-primary mt-5 mb-4"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="container mb-5">
        <p className="h4 text-center text-decoration-underline ">
          {" "}
          Customer Reviews{" "}
        </p>
        <ul class="list-group ">
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            dignissimos magnam quod vel accusantium repellendus vero, molestias
            labore fugit fuga fugiat, corrupti, tenetur perferendis qui impedit
            facilis. Architecto, quaerat pariatur quibusdam vitae porro eaque
            suscipit aut totam esse quam est earum omnis maiores
          </li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            dignissimos magnam quod vel accusantium repellendus vero, molestias
            labore fugit fuga fugiat, corrupti, tenetur perferendis qui impedit
            facilis.{" "}
          </li>
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            dignissimos
          </li>
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            dignissimos magnam quod vel accusantium repellendus vero, molestias
            labore fugit fuga
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductDetail;
