import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"
import Logo from "./Logo.jsx";
import ShoppingCart from "../shoppingcart/ShoppingCart.jsx";

function NavbarHeader() {
  const links = [
    { to: "/", text:"Home" },
    { to: "/productos", text:"Productos" },
    { to: "/contacto", text:"contacto" }    
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand >
          <Link to="/" className="nav-link link-light"><Logo /> Alta Pinta</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((link, index) => (
              <Link key={index} className="nav-link link-light" to={link.to}>{link.text}</Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
