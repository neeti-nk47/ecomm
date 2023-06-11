import React, { useContext } from "react";
import "./Header.css";
import { Container, Nav, Navbar, Dropdown, Badge } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../cart/Cart";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

function Header() {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const history = useNavigate();

  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  const logoutHandler = () => {
    authCtx.logout();
    history("/store", { replace: true });
  };

  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand>
            <NavLink to={"/"}>The Generics</NavLink>
          </Navbar.Brand>

          {authCtx.isLoggedIn && <NavLink to={"store"}>Store</NavLink>}

          {!authCtx.isLoggedIn && <NavLink to={"login"}>Store</NavLink>}

          <NavLink to={"about"}>About</NavLink>

          <NavLink to={"contact"}>Contact Us</NavLink>

          {!authCtx.isLoggedIn && (
            <NavLink to={"login"}>
              <button className="btn btn-info ">Login</button>
            </NavLink>
          )}

          {authCtx.isLoggedIn && (
            <Nav>
              <button className="btn btn-info " onClick={logoutHandler}>
                Logout
              </button>
              Logout
            </Nav>
          )}

          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="primary">
                <FaShoppingCart color="white" fontSize={"25px"} />

                <Badge color="white">{numberOfCartItem}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <Cart />
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
