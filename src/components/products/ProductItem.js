import React from "react";
import "./productItem.css";
import { Card } from "react-bootstrap";

const ProductItem = (props) => {
  return (
    <div>
      <Card.Img variant="top" src={props.image} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>
          <span>${props.price}</span>
        </Card.Subtitle>
      </Card.Body>
    </div>
  );
};

export default ProductItem;
