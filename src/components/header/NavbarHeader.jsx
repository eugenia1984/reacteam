import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/productos/pantalones">
                Pantalones
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/productos/remeras">
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/productos/buzos">Buzos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/productos/calzado">
                Calzado
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ShoppingCart />
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
