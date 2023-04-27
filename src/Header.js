import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </Nav>
          <a href="#cart" className="btn btn-light">
            CART
            <span>
              <sup> 0 </sup>
            </span>
          </a>
        </Container>
      </Navbar>
      <h1 className="mt-1 mb-4 fw-bold pt-2 pb-5 text-center bg-secondary display-1">
        The Generics
      </h1>
    </>
  );
};

export default Header;
