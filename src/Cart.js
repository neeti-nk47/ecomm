import { Col, Container, Row } from "react-bootstrap";

function Cart() {
  return (
    <Container className="cart">
      <Row>
        <Col className="text-center cart-text">Cart</Col>
      </Row>
      <Row>
        <Col className="text-center">
          There is no item in this cart click to shope
        </Col>
      </Row>
    </Container>
  );
}
export default Cart;
