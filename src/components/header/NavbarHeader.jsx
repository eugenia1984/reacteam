import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"
import Logo from "./Logo.jsx";
import ShoppingCart from "../shoppingcart/ShoppingCart.jsx";

function NavbarHeader() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
          Alta Pinta
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link link-light" to="/">Home</Link>
            <Link className="nav-link link-light" to="productos">Productos</Link>
            <Link className="nav-link link-light" to="contacto">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
        <ShoppingCart />
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
